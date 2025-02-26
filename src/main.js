
import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { router } from './router';
import Aos from 'aos';
import 'aos/dist/aos.css'

library.add(faInstagram, faTelegram, faWhatsapp, faBars);

const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')

Aos.init()
