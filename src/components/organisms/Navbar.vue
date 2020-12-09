<template>
  <div class="flex justify-between">
    <img class="h-12" src="../../assets/logo-full-small.svg" />
    <div>
      <app-button type="transparent">S'inscrire</app-button>
      <app-button type="transparent">Se connecter</app-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '../atoms/button/Button.vue';

export default defineComponent({
  name: 'app-navbar',
  components: { AppButton },
});
</script>
