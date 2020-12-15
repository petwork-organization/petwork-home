<template>
  <div class='h-full'>
    <the-navbar></the-navbar>

    <header class="px-32 py-16">
      <h1 class="font-extrabold text-5xl text-primary-500">Adopter n'a jamais été aussi simple !</h1>
    </header>

    <div class='pt-70px'></div>

    <div class="flex justify-center">
      <div class="max-w-full mt-8 px-4 w-full sm:max-w-4xl">
        <search-card></search-card>
      </div>
    </div>

    <div class="w-full my-12">
      <roles-overview></roles-overview>
    </div>
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
