<template>
    <div class="relative transition:opacity duration-400 hover:opacity-40 hover:-translate-y-2">
        <img :src="imgUrl" class="rounded-xl" />
    </div>
</template>

<script setup>
    defineProps({
        imgUrl: String
    })
</script>