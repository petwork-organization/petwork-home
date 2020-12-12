<template>
  <div :class="style" class="relative flex items-center px-3 mb-5 rounded-lg border-2 transition duration-300">
    <div v-if="prefixIcon" class="pr-2 pointer-events-none">
      <fa-icon :icon="prefixIcon"></fa-icon>
    </div>

    <div class="relative flex-1 z-10">
      <label
        v-if="label"
        :for="labelFor"
        :class="labelStyle"
        class="absolute bottom-0 transition-transform transition-colors duration-300 -z-10"
      >
        {{ labelText }}
      </label>
      <input
        v-bind="$attrs"
        v-model="value"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        :placeholder="placeholderText"
        :class="inputPadding"
        name="name"
        class="bg-transparent text-gray-700 outline-none w-full"
      />
    </div>

    <div v-if="suffixIconValue" class="pl-2 pointer-events-none">
      <fa-icon :icon="suffixIconValue"></fa-icon>
    </div>

    <div class="absolute -bottom-5 left-0 max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">
      {{ hintText }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Colors } from '@components/utils';
import { InputStates, InputClasses, InputFocusClasses, InputIcons } from './input.utils';

export default defineComponent({
  name: 'app-input',

  props: {
    model: {
      type: String,
      required: true,
    },
    label: String,
    name: String,
    placeholder: {
      type: String,
      default: '',
    },
    color: {
      type: String as PropType<Colors>,
      default: Colors.PRIMARY,
    },
    prefixIcon: String,
    suffixIcon: String,
    hint: String,
    required: {
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
      disabled: this.isDisabled,
      focus: false,
      value: '',
      error: '',
      state: InputStates.DEFAULT,
      inputPadding: this.label ? 'pt-4 -mt-4 pb-2 -mb-2' : 'py-2 -my-2',
    };
  },

  methods: {
    onFocus(): void {
      this.focus = true;
      this.state = InputStates.DEFAULT;
      this.error = '';
    },
    onBlur(): void {
      this.focus = false;

      if (!this.required) {
        this.state = InputStates.DEFAULT;
        this.error = '';
        return;
      }

      if (!this.value) {
        this.state = InputStates.ERROR;
        this.error = 'Ce champs est requis.';
      } else {
        this.state = InputStates.SUCCESS;
        this.error = '';
      }
    },
    onChange(): void {},
  },

  computed: {
    labelText(): String {
      return this.label + (this.required ? ' *' : '');
    },
    labelFor(): String {
      return this.name || '';
    },
    labelStyle(): Object {
      return {
        'transform -translate-y-5 mb-0.5 text-xs': this.focus || this.value,
      };
    },
    hintText(): String {
      return this.error || this.hint || '';
    },
    style(): Object {
      return {
        [InputFocusClasses[this.color]]: this.focus,
        [InputClasses[this.state]]: !this.focus,
        'pt-5 pb-2': this.label,
        'py-2': !this.label,
      };
    },
    placeholderText(): String {
      return this.label && !this.focus ? '' : this.placeholder;
    },
    suffixIconValue(): String {
      return this.suffixIcon || InputIcons[this.state] || '';
    },
  },
});
</script>
