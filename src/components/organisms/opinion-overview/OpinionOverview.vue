<template>
  <div class="text-accent-400">
    <app-wave></app-wave>
  </div>

  <div
    class="flex flex-col items-center bg-gradient-to-b from-accent-400 to-secondary-500 px-4 sm:px-16 md:px-32"
  >
    <div class="text-white text-3xl sm:text-5xl font-extrabold">
      Ils ont adoptés Petwork !
    </div>

    <div class="flex flex-row w-full my-24">
      <app-carousel :items="items">
        <template v-slot:item="{ item }">
          <app-card class="mx-4">
            <template v-slot:content>
              {{ item.test }}
            </template>
          </app-card>
        </template>
      </app-carousel>
    </div>
  </div>

  <div class="text-secondary-500 transform rotate-180 relative -z-10">
    <app-wave></app-wave>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '../../molecules/card/AppCard.vue';
import AppCarousel from '../../molecules/carousel/AppCarousel.vue';
import AppWave from '../../atoms/wave/AppWave.vue';

export default defineComponent({
  name: 'opinion-overview',
  components: { AppWave, AppCarousel, AppCard },
  data() {
    return {
      items: [
        {
          test: 'test',
        },
        {
          test: 'test2',
        },
        {
          test: 'test3',
        },
      ],
    };
  },
});
</script>
