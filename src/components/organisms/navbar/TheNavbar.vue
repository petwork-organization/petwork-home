<template>
  <div class="h-70px w-full flex items-center justify-between py-4 px-4 sm:px-16 md:px-32" :class="[stickyClasses]">
    <img alt="Logo Petwork" class="h-10 hidden sm:block" src="../../../assets/logo-full-small.svg" />
    <img alt="Logo Petwork" class="h-8 sm:hidden" src="../../../assets/logo.svg" />

    <div class="flex">
      <div class="hidden sm:block">
        <app-button type="transparent">S'inscrire</app-button>
      </div>

      <div class="ml-4">
        <app-button :type="ButtonTypes.OUTLINED">Se connecter</app-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '@atoms/button/AppButton.vue';
import { ButtonTypes } from '../../atoms/button/button.utils';

export default defineComponent({
  name: 'the-navbar',
  components: { AppButton },
  data() {
    return {
      ButtonTypes: ButtonTypes,
      sticky: false,
      scrollPosition: 0, // Last scroll position
    }
  },
  methods: {
    onScroll() {
      if (window.scrollY === 0) {
        // Sticky is removed only when fully scrolling to top
        this.sticky = false;
      } else if (window.scrollY > this.scrollPosition && window.scrollY > 70) {
        // Scroll down: sticky is starting from 70px
        this.sticky = true;
      }

      this.scrollPosition = window.scrollY;
    }
  },
  computed: {
    stickyClasses() {
      return {
        'sticky top-0 bg-white shadow-xl z-20 animate-slide-down': this.sticky
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  destroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
});
</script>
