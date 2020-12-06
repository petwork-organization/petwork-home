<template>
  <home-template></home-template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeTemplate from '../../components/templates/home/HomeTemplate.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeTemplate,
  },
  props: {},
});
</script>
