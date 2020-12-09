<template>
  <app-navbar class='px-32'></app-navbar>

  <div class="flex justify-center">
    <div class="max-w-full mt-4 px-4 sm:w-4xl">
      <app-search-card></app-search-card>
    </div>
  </div>
</template>

<script lang="ts">
import AppSearchCard from '@organisms/search-card/Searchcard.vue';
import { defineComponent } from 'vue';
import AppNavbar from '../../organisms/Navbar.vue';

export default defineComponent({
  name: 'HomeTemplate',
  components: { AppSearchCard, AppNavbar },
  props: {},
});
</script>
