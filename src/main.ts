import './plugins/fontawesome';
import './index.css';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import router from './router';
import { SwipeDirective } from './directives/SwipeDirective';

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .directive('swipe', new SwipeDirective())
  .mount('#app');
