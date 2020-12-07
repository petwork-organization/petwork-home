<template>
  <div
    class="min-h-screen min-w-screen bg-gradient-to-tr from-secondary-500 to-primary-500 px-5 flex flex-col justify-center items-center text-white"
  >
    <h1 class="text-6xl font-bold sm:text-8xl">Oups !</h1>
    <p class="text-xl mt-10">Nous ne trouvons pas la page que vous recherchez...</p>
    <div class="mt-10">
      <app-button route="/" type="monochrome" color="secondary">
        <fa-icon icon="paw" class="mr-2"></fa-icon>
        Accueil
      </app-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '@atoms/button/Button.vue';

export default defineComponent({
  name: 'NotFound',
  components: { AppButton },
  props: {},
});
</script>
