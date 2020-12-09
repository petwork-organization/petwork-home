<template>
  <div class='flex justify-between py-4'>
    <img
      class='h-10'
      src='../../../assets/logo-full-small.svg'
    >
    <div class="flex">
      <div>
        <app-button type='transparent'>S'inscrire</app-button>
      </div>

      <div class="ml-4">
        <app-button>Se connecter</app-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import AppButton from '@atoms/button/Button.vue';

export default defineComponent({
  name: 'app-navbar',
  components: { AppButton },
});
</script>
