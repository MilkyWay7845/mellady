<template>

<footer id="footer" style="background-color: #1b1e23;" class="flex flex-col items-center justify-center h-64 px-20 gap-8">
        <div class="flex flex-col items-center">
        <div>
            <p class="text-white font-exo2 text-2xl">CONTACT</p>
        </div>
        <div>
            <p class="text-white font-exo2"><b>Talya Melanskaya</b></p>
        </div>
        <div>
            <p class="text-white font-exo2"><b>Russia, RU</b></p>
        </div>
        <div>
            <p class="text-white font-exo2 underline"><a href="/">talya.melanskaya@com</a></p>
        </div>
        </div>

        <div class="flex gap-10">
            <a href="https://www.instagram.com/melanrosaa/" target="_blank">
                <font-awesome-icon style="color: aliceblue; width: 20px; height: 20px;" onmouseover="this.style.color='#555';" onmouseout="this.style.color='#fff';"  icon="fa-brands fa-instagram" />
            </a>
            <a href="https://t.me/TalyaMelan" target="_blank">
                <font-awesome-icon style="color: aliceblue; width: 20px; height: 20px;" onmouseover="this.style.color='#555';" onmouseout="this.style.color='#fff';"  icon="fa-brands fa-telegram" />
            </a>
            <font-awesome-icon style="color: aliceblue; width: 20px; height: 20px;" onmouseover="this.style.color='#555';" onmouseout="this.style.color='#fff';"  icon="fa-brands fa-whatsapp" />
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>