<template>
    <div class="relative transition:opacity duration-400 hover:opacity-40 hover:-translate-y-2">
        <a :href="link">
            <img :src="imgUrl" class="rounded-xl" />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 class="text-white text-lg font-exo2">{{ name }}</h2>
            </div>
        </a>
    </div>
</template>

<script setup>
    defineProps({
        name: String,
        imgUrl: String,
        link: String
    })
</script>