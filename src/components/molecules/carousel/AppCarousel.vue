<template>
  <div class="flex flex-row">
    <app-button color="primary" icon="arrow-left"></app-button>
    <slot></slot>
    <app-button color="primary" icon="arrow-right"></app-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppButton from '../../atoms/button/AppButton.vue';

export default defineComponent({
  name: 'app-carousel',
  components: { AppButton },
});
</script>
