<template>
  <div class="h-full relative">
    <the-navbar class="relative z-10"></the-navbar>

    <header
      class="relative px-4 pb-12 pt-24 md:pt-36 sm:px-16 lg:px-32 -mt-20 bg-gradient-to-b from-secondary-400 to-primary-500"
    >
      <h1
        class="w-full lg:w-1/2 font-extrabold text-3xl md:text-5xl text-white"
      >
        Adopter un animal n'a jamais été aussi simple !
      </h1>

      <p class="w-full lg:w-1/2 mt-4 sm:mt-8 text-lg text-white-60">
        Trouvez votre futur compagnon à l'aide d'éleveurs passionnés, gardez
        contact et partagez ensemble des moments inoubliables !
      </p>
    </header>

    <div
      class="text-primary-500 transform rotate-180 relative -mt-1 -mb-20 sm:-mb-32 lg:-mb-48 -z-10"
    >
      <app-wave></app-wave>
    </div>

    <div class="relative flex justify-center z-10">
      <div class="max-w-full mt-8 px-4 w-full sm:max-w-4xl">
        <search-card></search-card>
      </div>
    </div>

    <div class="h-10"></div>

    <div class="w-full my-12">
      <roles-overview></roles-overview>
    </div>

    <div class="w-full">
      <opinions-overview></opinions-overview>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppWave from '../../atoms/wave/AppWave.vue';
import TheNavbar from '../../organisms/navbar/TheNavbar.vue';
import OpinionsOverview from '../../organisms/opinion-overview/OpinionsOverview.vue';
import RolesOverview from '../../organisms/roles-overview/RolesOverview.vue';
import SearchCard from '../../organisms/search-card/SearchCard.vue';

export default defineComponent({
  name: 'HomeTemplate',
  components: {
    OpinionsOverview,
    RolesOverview,
    SearchCard,
    TheNavbar,
    AppWave,
  },
  props: {},
});
</script>
