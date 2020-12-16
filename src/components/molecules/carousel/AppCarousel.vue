<template>
  <div class="relative w-full flex flex-row items-center justify-center">
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
      <app-button
        color="primary"
        icon="arrow-left"
        @click="previous"
      ></app-button>
    </div>

    <slot
      name="item"
      v-bind:item="previousItem"
    ></slot>

    <slot
      name="item"
      v-bind:item="currentItem"
    ></slot>

    <slot
      name="item"
      v-bind:item="nextItem"
    ></slot>

    <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
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
      return this.items[this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1];
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
