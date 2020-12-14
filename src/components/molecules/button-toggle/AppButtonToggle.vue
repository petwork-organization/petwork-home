<template>
  <div class="inline-flex">
      <div
        v-for="item in items"
        :key="item.value"
        :class="[buttonToggleBaseStyle, item.value === value ? buttonToggleActiveStyle : buttonToggleStyle]"
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
  name: 'button-toggle',
  props: {
    items: {
      type: Array as PropType<ButtonToggleItem[]>,
      required: true,
    },
    color: {
      type: String as PropType<Colors>,
      default: Colors.PRIMARY,
    },
    initialValue: [String, Number],
    onSelect: Function,

  },
  data() {
    return {
      buttonToggleBaseStyle: 'border-t-2 border-b-2 last:border-r-2 first:border-l-2 first:rounded-l-xl last:rounded-r-xl px-3 py-1 md:px-4 md:py-2 cursor-pointer transition duration-300',
      value: this.initialValue || '',
    }
  },
  methods: {
    select(value: string) {
      this.value = value;
      this.onSelect && this.onSelect(this.value);
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
    if (!this.value && this.items && this.items.length) {
      this.select(this.items[0].value);
    }
  }
});
</script>
