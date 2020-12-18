<template>
  <div class="text-primary-500 -mb-1">
    <app-wave></app-wave>
  </div>

  <div class="bg-gradient-to-t from-secondary-400 to-primary-500">
    <div class="w-full flex flex-col items-center px-4 sm:px-16 lg:px-32">
      <div
        class="text-white text-3xl sm:text-5xl font-extrabold text-center pt-2"
      >
        Je suis ?
      </div>

      <div class="mt-6 sm:mt-12">
        <app-button-toggle
          :color="Colors.LIGHT"
          :items="buttonToggleItems"
          v-model="activeRole"
        ></app-button-toggle>
      </div>

      <div class="text-white max-w-lg text-center font-light mt-6 sm:mt-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        fringilla augue hendrerit est congue pulvinar.
      </div>
    </div>

    <div
      class="w-full max-w-full flex flex-nowrap space-x-6 md:space-x-12 mt-6 sm:mt-12 overflow-x-auto px-4 sm:px-16 lg:px-32 pb-10"
    >
      <div
        class="min-w-2/3 md:min-w-3/4 lg:min-w-0 lg:flex-1"
        v-for="(item, index) in items"
      >
        <roles-overview-card>
          <template v-slot:badge>{{ index + 1 }}</template>
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:content>
            {{ item.content }}
          </template>
        </roles-overview-card>
      </div>
    </div>
  </div>

  <div class="text-secondary-400 transform rotate-180 relative -z-10 -mt-1">
    <app-wave></app-wave>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButtonToggle from '../../molecules/button-toggle/AppButtonToggle.vue';
import { Colors } from '../../utils';
import {
  breedingOverviewItems,
  familyOverviewItems,
} from './roles-overview.utils';
import RolesOverviewCard from './RolesOverviewCard.vue';
import AppWave from '../../atoms/wave/AppWave.vue';

export default defineComponent({
  name: 'roles-overview',
  components: { AppWave, RolesOverviewCard, AppButtonToggle },
  data() {
    return {
      Colors: Colors,
      buttonToggleItems: [
        {
          value: 'breeding',
          label: 'Un élevage',
        },
        {
          value: 'family',
          label: 'Une famille',
        },
      ],
      activeRole: 'breeding',
    };
  },
  computed: {
    items(): Object[] {
      const items = {
        breeding: breedingOverviewItems,
        family: familyOverviewItems,
      };

      return items[this.activeRole];
    },
  },
});
</script>
