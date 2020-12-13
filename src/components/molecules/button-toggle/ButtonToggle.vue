<template>
  <div class="inline-flex">
      <div
        v-for="item in items"
        :key="item.value"
        :class="[buttonToggleBaseStyle, item.value === value ? buttonToggleActiveStyle : buttonToggleStyle]"
        @click="onSelect(item.value)"
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
  },
  data() {
    return {
      buttonToggleBaseStyle: 'border-t-2 border-b-2 last:border-r-2 first:border-l-2 first:rounded-l-xl last:rounded-r-xl px-6 py-3 cursor-pointer transition duration-300',
      value: '',
    }
  },
  methods: {
    onSelect(value: string) {
      this.value = value;
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
    this.value = this.items ? this.items[0].value : '';
  }
});
</script>
