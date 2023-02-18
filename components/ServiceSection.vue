<template>
    <section class="servicesSection" id="servicios">
        <div class="wrapper">
            <h1>Nuestros servicios</h1>
            <p>Más de 5 años de experiencia brindando servicios de alta calidad.</p>
            <div class="servicesSection-content">
                <slot />
            </div>
        </div>
    </section>
</template>

<style scoped>
.servicesSection {
    background-image: url('@/assets/images/wave.svg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    padding-block: 35px;
}
.servicesSection h1, .servicesSection p {
    text-align: center;
}

.servicesSection p {
    margin-block-end: 35px;
}
.servicesSection-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media screen and (max-width: 470px) {
    .wrapper {
        padding-inline: 30px;
    }
}
</style>