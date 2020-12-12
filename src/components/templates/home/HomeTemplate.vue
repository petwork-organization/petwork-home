<template>
  <the-navbar class="px-32"></the-navbar>

  <div class="flex justify-center">
    <div class="max-w-full mt-8 px-4 w-full sm:max-w-4xl">
      <search-card></search-card>
    </div>
  </div>

  <div class="px-32 my-12">
    <roles-overview></roles-overview>
  </div>
</template>

<script lang="ts">
import SearchCard from '@organisms/search-card/SearchCard.vue';
import TheNavbar from '@organisms/navbar/TheNavbar.vue';
import { defineComponent } from 'vue';
import RolesOverview from '@organisms/roles-overview/RolesOverview.vue';

export default defineComponent({
  name: 'HomeTemplate',
  components: { RolesOverview, SearchCard, TheNavbar },
  props: {},
});
</script>
