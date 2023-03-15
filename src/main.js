import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap.min.css';
//FontAwesome Icon and Library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
//FontAwesome Icons
import {
  faSort,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
library.add(
 faCaretRight,
 faSort,
);

const app = createApp(App)
app.component('fai', FontAwesomeIcon)
app.use(router)
app.mount('#app')
