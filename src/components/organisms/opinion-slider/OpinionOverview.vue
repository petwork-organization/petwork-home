<template>
  <img
    src="../../../assets/shapes/wave-secondary-400.svg"
    class="w-full-mb-1"
  />
  <div
    class="flex flex-col items-center bg-gradient-to-b from-secondary-400 to-primary-500 px-4 sm:px-16 md:px-32"
  >
    <div class="text-white text-3xl sm:text-5xl font-extrabold">
      Ils ont adoptés Petwork !
    </div>
    <div class="flex flex-row">
      <app-carousel>test</app-carousel>
    </div>
  </div>
  <img
    src="../../../assets/shapes/wave-primary-500.svg"
    class="w-full -mt-1 transform rotate-180 relative -z-10"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '../../molecules/card/AppCard.vue';
import AppCarousel from '../../molecules/carousel/AppCarousel.vue';

export default defineComponent({
  name: 'opinion-overview',
  components: { AppCarousel, AppCard },
  data() {
    return {};
  },
});
</script>
