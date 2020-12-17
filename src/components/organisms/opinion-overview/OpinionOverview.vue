<template>
  <div class="text-accent-400">
    <app-wave></app-wave>
  </div>

  <div
    class="flex flex-col items-center bg-gradient-to-b from-accent-400 to-secondary-500"
  >
    <div class="text-white text-3xl sm:text-5xl font-extrabold">
      Ils ont adoptés Petwork !
    </div>

    <div class="flex flex-row w-full my-12">
      <app-carousel :items="items">
        <template v-slot:item="{ item }">
          <app-card class="p-2">
            <template v-slot:content>
              <div class="flex flex-row">
                <div class="flex flex-col justify-center mr-6">
                  <div
                    class="rounded-full h-110px w-110px"
                    :style="{
                      'background-image': 'url(\'' + item.avatar + '\')',
                      'background-position': 'center',
                      'background-size': 'cover',
                    }"
                  ></div>
                </div>

                <div class="w-9/12">
                  <div class="flex flex-col">
                    <div class="text-justify">{{ item.content }}</div>

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

  <div class="text-secondary-500 transform rotate-180 relative -mt-1 -z-10">
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
