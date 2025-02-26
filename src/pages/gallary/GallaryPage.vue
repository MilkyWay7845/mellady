<template>
    
    <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col w-full items-center py-30">
      <div class="flex flex-col px-50 items-center gap-2">
        <p class="text-white font-exo2 text-2xl">{{ currentPage.title }}</p>
        <p class="text-white font-exo2 text-lg"> 
          {{ currentPage.description }}
        </p>
      </div>
  
      <PhotoGrid :images="currentPage.images"/>
      
    </div>
  </template>
  
<script setup>
    import { useRouter } from 'vue-router';
    import { reactive, computed } from 'vue';

    import PhotoGrid from './PhotoGrid.vue';

    const deleteImage = (index) => {
        pageInfos[0].images.splice(index, 1)
    }

    const pageInfos = reactive([
        {
            title: 'Minsk',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nisi ipsa quam aperiam! Illo eum at, enim, aliquam odio vel recusandae blanditiis fuga iste eaque ad facilis reprehenderit inventore. Dolor?",
            images: [
                '/Minsk/1.jpg',
                '/Minsk/2.jpg',
                '/Minsk/3.jpg',
                '/Minsk/4.jpg',
                '/Minsk/5.jpg',
                '/Minsk/6.jpg',
                '/Minsk/7.jpg',
                '/Minsk/8.jpg',
                '/Minsk/9.jpg'
            ],
            link: '/minsk'
        },
        {
            title: 'Kronstadt',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nisi ipsa quam aperiam! Illo eum at, enim, aliquam odio vel recusandae blanditiis fuga iste eaque ad facilis reprehenderit inventore. Dolor?",
            images: [
                '/Kronstadt/1.jpg',
                '/Kronstadt/2.jpg',
                '/Kronstadt/3.jpg',
                '/Kronstadt/4.jpg',
                '/Kronstadt/5.jpg',
                '/Kronstadt/6.jpg',
                '/Kronstadt/7.jpg',
                '/Kronstadt/8.jpg',
                '/Kronstadt/9.jpg'
            ],
            link: '/kronstadt'
        },
        {
            title: 'Lahta',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nisi ipsa quam aperiam! Illo eum at, enim, aliquam odio vel recusandae blanditiis fuga iste eaque ad facilis reprehenderit inventore. Dolor?",
            images: [
                '/Lahta/1.jpg',
                '/Lahta/2.jpg',
                '/Lahta/3.jpg',
                '/Lahta/4.jpg',
                '/Lahta/5.jpg',
                '/Lahta/6.jpg',
                '/Lahta/7.jpg',
                '/Lahta/8.jpg',
                '/Lahta/9.jpg',
                '/Lahta/10.jpg',
            ],
            link: '/lahta'
        },
        {
            title: 'Me',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nisi ipsa quam aperiam! Illo eum at, enim, aliquam odio vel recusandae blanditiis fuga iste eaque ad facilis reprehenderit inventore. Dolor?",
            images: [
                '/Me/1.jpg',
                '/Me/2.jpg',
                '/Me/3.jpg',
                '/Me/4.jpg',
                '/Me/5.jpg',
                '/Me/6.jpg',
                '/Me/7.jpg',
                '/Me/8.jpg',
                '/Me/9.jpg'
            ],
            link: '/me'
        }
    ])

    const currentPage = computed(() => {
        return pageInfos.find(info => {
            return info.link === useRouter().currentRoute.value.path
        })
    })

</script>