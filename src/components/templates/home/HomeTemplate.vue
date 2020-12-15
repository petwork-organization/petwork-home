<template>
  <div class="h-full">
    <the-navbar></the-navbar>

    <div class="pt-70px"></div>

    <div class="flex justify-center">
      <div class="max-w-full mt-8 px-4 w-full sm:max-w-4xl">
        <search-card></search-card>
      </div>
    </div>

    <div class="w-full my-12">
      <roles-overview></roles-overview>
    </div>

    <div class="w-full">
      <opinion-overview></opinion-overview>
    </div>
  </div>
</template>

<script lang="ts">
import SearchCard from '@organisms/search-card/SearchCard.vue';
import TheNavbar from '@organisms/navbar/TheNavbar.vue';
import { defineComponent } from 'vue';
import RolesOverview from '@organisms/roles-overview/RolesOverview.vue';
import OpinionOverview from '@organisms/opinion-slider/OpinionOverview.vue';

export default defineComponent({
  name: 'HomeTemplate',
  components: {
    OpinionOverview,
    RolesOverview,
    SearchCard,
    TheNavbar,
  },
  props: {},
});
</script>
