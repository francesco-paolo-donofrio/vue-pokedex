import './assets/styles/general.scss'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';    // Per gli stili di Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.js'; // Per il JavaScript di Bootstrap (incluso Popper.js)

createApp(App).mount('#app')
