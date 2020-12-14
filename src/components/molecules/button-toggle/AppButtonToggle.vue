<template>
  <div class="inline-flex">
      <div
        v-for="item in items"
        :key="item.value"
        :class="[buttonToggleBaseStyle, item.value === modelValue ? buttonToggleActiveStyle : buttonToggleStyle]"
        @click="select(item.value)"
      >{{item.label}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Colors } from '../../utils';
import {
  ButtonToggleActiveClasses,
  ButtonToggleClasses,
  ButtonToggleItem,
} from './button-toggle.utils';

export default defineComponent({
  name: 'app-button-toggle',
  props: {
    modelValue: [String, Number],
    items: {
      type: Array as PropType<ButtonToggleItem[]>,
      required: true,
    },
    color: {
      type: String as PropType<Colors>,
      default: Colors.PRIMARY,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      buttonToggleBaseStyle: 'border-t-2 border-b-2 last:border-r-2 first:border-l-2 first:rounded-l-xl last:rounded-r-xl px-3 py-1 md:px-4 md:py-2 cursor-pointer transition duration-300',
    }
  },
  methods: {
    select(value: string) {
      this.$emit('update:modelValue', value)
    }
  },
  computed: {
    buttonToggleStyle(): Object {
      return ButtonToggleClasses[this.color]
    },
    buttonToggleActiveStyle(): Object {
      return ButtonToggleActiveClasses[this.color]
    },
  },
  mounted() {
    if (!this.modelValue && this.items && this.items.length) {
      this.select(this.items[0].value);
    }
  }
});
</script>
