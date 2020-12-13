<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :disabled="disabled"
    :class="[style]"
    class="transition duration-300 focus:outline-none flex items-center justify-center"
  >
    <fa-icon
      :icon="icon"
      v-if="icon"
    ></fa-icon>

    <fa-icon
      :icon="prefixIcon"
      class="mr-3"
      v-if="prefixIcon"
    ></fa-icon>

    <slot v-if="!icon"></slot>

    <fa-icon
      :icon="suffixIcon"
      class="ml-3"
      v-if="suffixIcon"
    ></fa-icon>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Colors } from '../../utils';
import { ButtonClasses, ButtonTags, ButtonTypes } from './button.utils';

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
    isDisabled: {
      type: Boolean,
      default: false,
    },
    icon: String,
    prefixIcon: String,
    suffixIcon: String,
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
      const designStyle = ButtonClasses[this.type][this.color];
      const buttonStyle = this.icon ? 'rounded-full h-40px w-40px px-0 py-0' : 'rounded-xl px-3 py-1 md:px-4 md:py-2';
      const baseStyle =
        this.tag === ButtonTags.LINK
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
