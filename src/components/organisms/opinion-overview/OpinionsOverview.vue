<template>
  <div class="text-accent-400 -mb-1">
    <app-wave></app-wave>
  </div>

  <div
    class="flex flex-col items-center bg-gradient-to-b from-accent-400 to-secondary-500"
  >
    <div
      class="text-white text-3xl sm:text-5xl text-center font-extrabold pt-2 px-4 sm:px-16 lg:px-32"
    >
      Ils ont adoptés Petwork !
    </div>

    <div class="flex flex-row w-full">
      <app-carousel :items="items">
        <template v-slot:item="{ item }">
          <opinions-overview-card :item="item"></opinions-overview-card>
        </template>
      </app-carousel>
    </div>
  </div>

  <div class="text-secondary-500 transform rotate-180 relative -z-10 -mt-1">
    <app-wave></app-wave>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '../../molecules/card/AppCard.vue';
import AppCarousel from '../../molecules/carousel/AppCarousel.vue';
import AppWave from '../../atoms/wave/AppWave.vue';
import OpinionsOverviewCard from './OpinionsOverviewCard.vue';

export default defineComponent({
  name: 'opinions-overview',
  components: { OpinionsOverviewCard, AppWave, AppCarousel, AppCard },
  data() {
    return {
      items: [
        {
          title: 'Lorem ipsum i dolor sin amet.',
          content:
            'Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet.',
          avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
        },
        {
          title: 'Lorem ipsum i dolor sin amet.',
          content:
            'Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet.',
          avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
        },
        {
          title: 'Lorem ipsum i dolor sin amet.',
          content:
            'Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet.',
          avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
        },
        {
          title: 'Lorem ipsum i dolor sin amet.',
          content:
            'Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet.',
          avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
        },
      ],
    };
  },
});
</script>
