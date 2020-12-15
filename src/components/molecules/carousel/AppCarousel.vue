<template>
  <div class="flex flex-row">
    <app-button
      color="primary"
      icon="arrow-left"
      @click="previous"
    ></app-button>
    <template v-for="item in items">
      <slot
        name="item"
        v-bind:item="item"
        v-if="item === items[currentIndex]"
      ></slot>
    </template>
    <app-button color="primary" icon="arrow-right" @click="next"></app-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '../../atoms/button/AppButton.vue';

export default defineComponent({
  name: 'app-carousel',
  components: { AppButton },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    next(): void {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    previous(): void {
      this.currentIndex =
        this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
    },
  },
});
</script>
