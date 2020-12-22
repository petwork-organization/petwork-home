import './plugins/fontawesome';
import './index.css';
import App from './App.vue';
import 'hammerjs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import router from './router';

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .directive('swipe', {
    mounted(el, binding) {
      if (typeof binding.value === 'function') {
        const hammer = new Hammer(el);
        if (binding.modifiers.left) {
          hammer.on('swipeleft', binding.value);
        } else if (binding.modifiers.right) {
          hammer.on('swiperight', binding.value);
        } else {
          hammer.on('swipe', binding.value);
        }
      }
    },
  })
  .mount('#app');
