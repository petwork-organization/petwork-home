<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :disabled="disabled"
    :class="[style]"
    class="transition duration-300 focus:outline-none"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export enum ButtonTypes {
  FILLED = 'filled',
  TRANSPARENT = 'transparent',
  OUTLINED = 'outlined',
  MONOCHROME = 'monochrome',
  LINK = 'link',
}
export enum ButtonTags {
  BUTTON = 'button',
  LINK = 'a',
}
export enum Colors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning',
  SUCCESS = 'success',
}

export default defineComponent({
  name: 'app-button',

  props: {
    tag: {
      type: String as PropType<ButtonTags>,
      default: ButtonTags.BUTTON,
    },
    color: {
      type: String as PropType<Colors>,
      default: Colors.PRIMARY,
    },
    type: {
      type: String as PropType<ButtonTypes>,
      default: ButtonTypes.FILLED,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      loading: false,
      disabled: this.isDisabled,
    };
  },

  methods: {
    startLoading(): void {
      this.loading = true;
      this.disabled = true;
    },
    stopLoading(): void {
      this.loading = false;
      this.disabled = false;
    },
  },

  computed: {
    style(): Object {
      const styles = {
        [ButtonTypes.FILLED]: `border-${this.color}-500 bg-${this.color}-500 hover:bg-${this.color}-600 hover:border-${this.color}-600 active:bg-${this.color}-700 active:border-${this.color}-700 text-white`,
        [ButtonTypes.TRANSPARENT]: `border-transparent text-${this.color}-500 hover:border-${this.color}-50 hover:bg-${this.color}-50 active:bg-${this.color}-100`,
        [ButtonTypes.OUTLINED]: `border-${this.color}-100 text-${this.color}-500 hover:border-${this.color}-500 hover:bg-${this.color}-50 active:bg-${this.color}-100`,
        [ButtonTypes.MONOCHROME]: `border-white bg-white text-${this.color}-500 hover:border-${this.color}-50 hover:bg-${this.color}-50 active:bg-${this.color}-100 active:border-${this.color}-100`,
        [ButtonTypes.LINK]: `text-${this.color}-500 hover:text-${this.color}-600`,
      };

      const stylesDisabled = {
        [ButtonTypes.FILLED]: `border-${this.color}-200 bg-${this.color}-200 text-white`,
        [ButtonTypes.TRANSPARENT]: `border-transparent text-${this.color}-200`,
        [ButtonTypes.OUTLINED]: `border-${this.color}-100 text-${this.color}-200`,
        [ButtonTypes.MONOCHROME]: `border-white bg-white text-${this.color}-200`,
        [ButtonTypes.LINK]: `text-${this.color}-200`,
      };

      const designStyle = this.disabled ? stylesDisabled[this.type] : styles[this.type];

      const buttonStyle = this.isIcon ? 'rounded-full h-40px w-40px px-0 py-0' : 'rounded-lg px-4 py-1 md:px-6 md:py-2';
      const baseStyle =
        this.tag === 'a'
          ? 'inline-flex align-middle items-center font-medium no-underline hover:underline cursor-pointer'
          : `${buttonStyle} base-button inline-flex align-middle items-center justify-center font-medium  border-2`;

      return {
        'base-spinner': this.loading,
        'cursor-not-allowed': this.disabled,
        [baseStyle]: true,
        [designStyle]: true,
      };
    },
  },
});
</script>
