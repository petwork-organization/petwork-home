<template>
  <div class='text-accent-400'>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 166.1">
      <path d="M413,0C201.4,0,49.8,93.8,0,140v26.1h1440V140C1079.5,140,677.5,0,413,0z" fill="currentColor"/>
    </svg>
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

  <div class='text-secondary-500 transform rotate-180 relative -z-10'>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 166.1">
      <path d="M413,0C201.4,0,49.8,93.8,0,140v26.1h1440V140C1079.5,140,677.5,0,413,0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '../../molecules/card/AppCard.vue';
import AppCarousel from '../../molecules/carousel/AppCarousel.vue';

export default defineComponent({
  name: 'opinion-overview',
  components: { AppCarousel, AppCard },
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
