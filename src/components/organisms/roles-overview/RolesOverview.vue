<template>
  <div class="flex flex-col items-center bg-primary-500 py-5 space-y-5">
    <div class="text-white text-3xl font-semibold">Je suis ?</div>
    <div class="text-white max-w-lg text-center font-light">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla augue hendrerit est congue pulvinar.
    </div>
    <div class="px-5 flex space-x-36">
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
