<template>
  <img src="../../../assets/shapes/wave-primary-500.svg" class="w-full -mb-1">

  <div class="flex flex-col items-center bg-gradient-to-t from-secondary-400 to-primary-500 px-4 sm:px-32">
    <div class="text-white text-5xl font-semibold">Je suis ?</div>

    <div class="text-white max-w-lg text-center font-light mt-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla augue hendrerit est congue pulvinar.
    </div>

    <div class="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 mt-12 -mb-12">
      <roles-overview-card class="flex-1" v-for="(item, index) in breedingOverviewItems">
        <template v-slot:badge>{{ index + 1 }}</template>
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:content>
          {{ item.content }}
        </template>
      </roles-overview-card>
    </div>
  </div>

  <img src="../../../assets/shapes/wave-secondary-400.svg" class="w-full -mt-1 transform rotate-180 relative -z-10">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RolesOverviewCard from './RolesOverviewCard.vue';

export default defineComponent({
  name: 'roles-overview',
  components: { RolesOverviewCard },

  data() {
    return {
      breedingOverviewItems: [
        {
          title: 'Lorem ipsum',
          content: 'Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet.',
        },
        {
          title: 'Lorem ipsum',
          content: 'Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet.',
        },
        {
          title: 'Lorem ipsum',
          content: 'Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet. Lorem ipsum i dolor sin amet.',
        },
      ],
    };
  },
});
</script>
