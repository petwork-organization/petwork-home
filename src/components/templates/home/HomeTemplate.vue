<template>
  <div class='h-full relative'>
    <img src="../../../assets/shapes/circle-gradient-primary-secondary.svg" class="absolute -top-1 right-0 w-1/2 -z-10">

    <the-navbar></the-navbar>

    <header class="relative px-32 py-16">
      <h1 class="w-1/2 font-extrabold text-5xl text-primary-500">Adopter n'a jamais été aussi simple !</h1>

      <p class='w-1/2 mt-12 text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer fringilla augue hendrerit est congue pulvinar.
      </p>
    </header>

    <div class="flex justify-center">
      <div class="max-w-full mt-8 px-4 w-full sm:max-w-4xl">
        <search-card></search-card>
      </div>
    </div>

    <div class='h-200px'></div>

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
