<template>
  <app-navbar class="px-32"></app-navbar>

  <div class="flex justify-center">
    <div class="max-w-full mt-8 px-4 w-full sm:max-w-4xl">
      <app-search-card></app-search-card>
    </div>
  </div>
</template>

<script lang="ts">
import AppSearchCard from '@organisms/search-card/SearchCard.vue';
import AppNavbar from '@organisms/navbar/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeTemplate',
  components: { AppSearchCard, AppNavbar },
  props: {},
});
</script>
