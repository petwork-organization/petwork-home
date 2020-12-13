<template>
  <div class="flex flex-col items-center bg-gradient-to-t from-secondary-400 to-primary-500 px-4 sm:px-32 py-12 my-48 space-y-12">
    <div class="text-white text-3xl font-semibold">Je suis ?</div>
    <div class="text-white max-w-lg text-center font-light">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla augue hendrerit est congue pulvinar.
    </div>
    <div class="flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12">
      <roles-overview-card class="flex-1" v-for="(item, index) in breedingOverviewItems">
        <template v-slot:badge>{{ index + 1 }}</template>
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:content>
          {{ item.content }}
        </template>
      </roles-overview-card>
    </div>
  </div>
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
