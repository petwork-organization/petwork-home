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
          <app-card class="p-6">
            <template v-slot:content>
              <div class="flex flex-col lg:flex-row items-center">
                <div class="flex flex-col justify-center mb-6 lg:mb-0 lg:mr-6">
                  <div
                    class="rounded-full h-110px w-110px"
                    :style="{
                      'background-image': 'url(\'' + item.avatar + '\')',
                      'background-position': 'center',
                      'background-size': 'cover',
                    }"
                  ></div>
                </div>

                <div class="flex-1">
                  <div class="flex flex-col text-center lg:text-left">
                    <div>{{ item.content }}</div>

                    <div class="text-accent-400 text-base font-semibold mt-4">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </app-card>
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

export default defineComponent({
  name: 'opinion-overview',
  components: { AppWave, AppCarousel, AppCard },
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
      ],
    };
  },
});
</script>
