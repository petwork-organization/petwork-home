<template>
  <div
    class="relative w-full flex flex-row items-center justify-center py-12 overflow-x-hidden"
  >
    <div :class="cardWidthClass" class="opacity-30 transform scale-90">
      <slot name="item" v-bind:item="previousItem"></slot>
    </div>

    <div :class="cardWidthClass">
      <slot name="item" v-bind:item="currentItem"></slot>
    </div>

    <div :class="cardWidthClass" class="opacity-30 transform scale-90">
      <slot name="item" v-bind:item="nextItem"></slot>
    </div>

    <div
      class="absolute z-10 flex justify-between absolute w-full top-1/2 transform -translate-y-1/2 px-4 sm:px-16 lg:px-32"
    >
      <app-button
        color="primary"
        icon="arrow-left"
        @click="previous"
      ></app-button>

      <app-button color="primary" icon="arrow-right" @click="next"></app-button>
    </div>
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
      cardWidthClass: 'min-w-3/4 md:min-w-1/2 lg:min-w-0 lg:w-600px mx-0.5',
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
  computed: {
    previousItem() {
      return this.items[
        this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1
      ];
    },
    nextItem() {
      return this.items[(this.currentIndex + 1) % this.items.length];
    },
    currentItem() {
      return this.items[this.currentIndex];
    },
  },
});
</script>
