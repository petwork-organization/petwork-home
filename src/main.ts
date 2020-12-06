import './plugins/fontawesome';
import './index.css'

import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import router from './router';

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
