<template>
  <nav id="navbar" class="fixed w-full h-24 top-0 px-10 sm:px-20 space-y-10 transition-all ease-out duration-800 z-40">

    <div class="flex size-full justify-between align-middle">
      <div class="flex items-center gap-4">
        <img src="/logo42.svg" alt="logo" class="w-35 invert blur-[0px] hover:blur-[2px] transition-all duration-1000" />
      </div>

      <ul class="flex items-center gap-8 hidden sm:flex">
        <li class="text-white font-exo2 text-lg hover:text-gray-400">
          <a href="/">
            Home
          </a>
        </li>

        <li class="text-white font-exo2 text-lg hover:text-gray-400">
          <a href="#/#about">
            About Me
          </a>
        </li>

        <li class="text-white font-exo2 text-lg hover:text-gray-400">
          <a href="#/#art">
            Art
          </a>
        </li>

        <li class="text-white font-exo2 text-lg hover:text-gray-400">
          <a href="#/#footer">
            Contact
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <div class="absolute inset-y-0 right-0 flex items-center px-10 sm:hidden">
        <button @click="toggleMenu"
          class="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-[#191a1c] transition-all ease-out duration-800 focus:outline-none"
          aria-controls="mobile-menu" aria-expanded="false">
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div data-aos="fade-up" style="background-color: rgba(27,30,35,0.95);" data-aos-duration="500"
      class="p-4 space-y-2 rounded-md bg-opacity-50 sm:hidden" v-if="isOpenMenu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="/" class="text-white font-exo2 text-lg hover:text-gray-400 px-3 py-1 rounded-md block">Home</a>
        <hr class="border-white" />
        <a href="#/#about" class="text-white font-exo2 text-lg hover:text-gray-400 px-3 py-1 rounded-md block">About
          Me</a>
        <hr class="border-white" />
        <a href="#/#art" class="text-white font-exo2 text-lg hover:text-gray-400 px-3 py-1 rounded-md block">Art</a>
        <hr class="border-white" />
        <a href="#/#footer"
          class="text-white font-exo2 text-lg hover:text-gray-400 px-3 py-1 rounded-md block">Contact</a>
        <hr class="border-white" />
      </div>
    </div>

  </nav>
</template>

<script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const isOpenMenu = ref(false)

  const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
  }

  const onScroll = () =>  {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 20) {
      navbar.style.background = "rgba(255,255,255,.0)"
      navbar.style.height = "96px"
    } else {
      navbar.style.background = "rgba(27,30,35,1)"
      navbar.style.height = "80px"
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  });


</script>
