<template>
  <div class="h-70px w-full flex items-center justify-between py-4 px-4 sm:px-16 lg:px-32 transition-colors duration-500" :class="[stickyClasses]">
    <app-logo v-if="sticky" :mode="LogoModes.DEFAULT" :variant="LogoVariants.FULL" class="h-40px hidden md:block"></app-logo>
    <app-logo v-if="sticky" :mode="LogoModes.DEFAULT" :variant="LogoVariants.SMALL" class="h-30px md:hidden"></app-logo>
    <app-logo v-if="!sticky" :mode="LogoModes.MONOCHROME" :variant="LogoVariants.FULL" class="h-40px hidden md:block text-white"></app-logo>
    <app-logo v-if="!sticky" :mode="LogoModes.MONOCHROME" :variant="LogoVariants.SMALL" class="h-30px md:hidden text-white"></app-logo>

    <div class="flex">
      <div class="hidden sm:block">
        <app-button type="transparent" :color="sticky ? Colors.PRIMARY : Colors.LIGHT">S'inscrire</app-button>
      </div>

      <div class="ml-4">
        <app-button :type="ButtonTypes.OUTLINED" :color="sticky ? Colors.PRIMARY : Colors.LIGHT">Se connecter</app-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '@atoms/button/AppButton.vue';
import { ButtonTypes } from '../../atoms/button/button.utils';
import AppLogo from '../../atoms/logo/AppLogo.vue';
import { LogoModes, LogoVariants } from '../../atoms/logo/logo.utils';
import { Colors } from '../../utils';

export default defineComponent({
  name: 'the-navbar',
  components: { AppButton, AppLogo },
  data() {
    return {
      Colors: Colors,
      ButtonTypes: ButtonTypes,
      LogoVariants: LogoVariants,
      LogoModes: LogoModes,
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
