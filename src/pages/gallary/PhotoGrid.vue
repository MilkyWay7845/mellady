<template>
    <div data-aos="fade-up" data-aos-duration="1000" id="art" class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 p-20">
        <PhotoItem v-for="image in images" :key="image" :img-url="image"/>
    </div>
</template>

<script setup>
    import PhotoItem from './PhotoItem.vue';

    defineProps({
        images: Array
    })

</script>