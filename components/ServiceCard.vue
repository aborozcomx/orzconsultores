<template>
    <div class="serviceCard">
        <img :src="service.icon" alt="">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    service: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>
.serviceCard {
    background-color: #fff;
    border: 2px solid var(--orange);
    border-radius: 12px;   
    padding-block: 40px;
    padding-inline: 30px;
    transition: .5s all ease;
}

.serviceCard:hover {
    box-shadow: 0px 0px 40px 5px var(--orange);
    cursor: pointer;
}
</style>