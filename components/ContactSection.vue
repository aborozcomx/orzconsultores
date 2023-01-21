<template>
    <section class="contactSection" id="contacto">
        <div class="wrapper">
            <div class="contactSection-form">
                <h2>Contáctanos</h2>
                <form action="#" @submit.prevent="handleSubmitForm">
                    <div class="form-group">
                        <label for="name">
                            <span>Nombre</span>
                            <input type="text" v-model="form.name" placeholder="Ingresa tu nombre" required>
                        </label>
                    </div>
    
                    <div class="form-group">
                        <label for="lastname">
                            <span>Apellido</span>
                            <input type="text" v-model="form.lastname" placeholder="Ingresa tu apellido" required>
                        </label>
                    </div>
    
                    <div class="form-group">
                        <label for="company">
                            <span>Empresa</span>
                            <input type="text" v-model="form.company" placeholder="Ingresa el nombre de tu empresa" required>
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">
                            <span>Teléfono</span>
                            <input type="text" v-model="form.phone" placeholder="Ingresa tu telefono" required>
                        </label>
                    </div>

                    <div class="form-group">
                        <label for="email">
                            <span>Email</span>
                            <input type="email" v-model="form.email" placeholder="Ingresa tu email" required>
                        </label>
                    </div>
    
                    <div class="form-group">
                        <label for="service">
                            <span>Servicio</span>
                            <select id="type" v-model="form.service" required>
                                <option value="financiero">Servicios financieros</option>
                                <option value="tecnologico">Servicios de tecnologia</option>
                            </select>
                        </label>
                    </div>

                    <div v-if="message" :class="messageType">
                        <span>{{ message }}</span>
                    </div>
                    <button :disabled="isDisabled" :class="{'disabled': isDisabled}" type="submit">Enviar mensaje</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const form = reactive({
    name: '',
    lastname: '',
    company: '',
    phone: '',
    email: '',
    service: 'financiero'
})

const isDisabled = ref(false);
const message = ref("");
const messageType = ref("")

const handleSubmitForm = async () => {
    isDisabled.value = true;
    const {data, error} = await useFetch('https://formspree.io/f/xoqzvyew', { body: {...form}, method: 'POST'});

    if( data.value?.ok ) {
        message.value = "Mensaje ha sido enviado correctamente!";
        messageType.value = "success"; 
    } else {
        message.value = "Hubo un error al enviar tu mensaje, inténtalo de nuevo.";
        messageType.value = "error";
    }

    form.name = "";
    form.lastname = "";
    form.company = "";
    form.phone = "";
    form.email = "";

    isDisabled.value = false;
}

watch(message, (value) => {
    if(value) {
        setTimeout(() => {
            message.value = "";
        }, 2000);
    }
})
</script>
<style scoped>
.contactSection {
    padding-block: 35px;
}

.contactSection-form {
    background-color: var(--lightGray);
    padding: 25px;
    border-radius: 12px;
}

.form-group {
    margin-block-end: 20px;
}

.form-group label{
    display: flex;
    flex-direction: column;
}

.form-group span{
    margin-block-end: 10px;
    font-weight: bold;
    color: var(--darkBlue);
}

input, select {
    border: none;
    border: 2px solid var(--darkBlue);
    border-radius: 8px;
    padding: 8px;
}

button {
    background-color: var(--orange);
    color: var(--darkBlue);
    border: none;
    font-size: 16px;
    border-radius: 12px;
    padding: 12px;
    display: block;
    margin: 0 auto;
    max-width: 220px;
    cursor: pointer;
}

input:focus {
    border: none;
    border: 2px solid var(--orange);
    outline: none;
}

button.disabled {
    opacity: .2;
    cursor: not-allowed;
}

.success{
    border: 2px solid green;
    border-radius: 10px;
    padding: 8px;
    margin-block-end: 20px;
}

.error{
    border: 2px solid red;
    border-radius: 10px;
    padding: 8px;
    margin-block-end: 20px;
}
@media screen and (max-width: 470px) {
    .wrapper {
        padding-inline: 30px;
    }
}
</style>