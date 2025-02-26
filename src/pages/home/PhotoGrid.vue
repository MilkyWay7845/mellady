<template>
    <div data-aos="fade-up" data-aos-duration="1000" id="art" class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 p-20">
        <PhotoItem v-for="info in photoInfo" :key="info" :name="info.name" :img-url="info.imgUrl" :link="info.link"/>
    </div>
</template>

<script setup>
    import PhotoItem from './PhotoItem.vue';
    import { reactive } from 'vue';

    const photoInfo = reactive([
        {
            name: 'Minsk',
            imgUrl: '/PhotoGrid/1.jpg',
            link: '#/minsk'
        },
        {
            name: 'Kronstadt',
            imgUrl: '/PhotoGrid/2.jpg',
            link: '#/kronstadt'
        },
        {
            name: 'Lahta',
            imgUrl: '/PhotoGrid/3.jpg',
            link: '#/lahta'
        },
        {
            name: 'Me',
            imgUrl: '/PhotoGrid/4.jpg',
            link: '#/me'
        }
    ])
</script>