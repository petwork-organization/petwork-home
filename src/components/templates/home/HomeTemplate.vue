<template>
 <app-navbar class='px-32'></app-navbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from '../../organisms/Navbar.vue';

export default defineComponent({
  name: 'HomeTemplate',
  components: { AppNavbar },
  props: {},
});
</script>
