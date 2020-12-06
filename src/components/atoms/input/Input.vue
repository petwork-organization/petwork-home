<template>
  <div
    :class="style"
    class="relative flex items-center px-3 mb-5 rounded-lg border-2 transition duration-300"
  >
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

    <div
      class="absolute -bottom-5 left-0 max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-xs"
    >
      {{ hintText }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Colors } from "@atoms/button/Button.vue";

export enum States {
  DEFAULT = "default",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
}

export default defineComponent({
  name: "app-input",

  props: {
    model: {
      type: String,
      required: true,
    },
    label: String,
    name: String,
    placeholder: {
      type: String,
      default: "",
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
      value: "",
      error: "",
      state: States.DEFAULT,
      inputPadding: this.label ? "pt-4 -mt-4 pb-2 -mb-2" : "py-2 -my-2",
    };
  },

  methods: {
    onFocus(): void {
      this.focus = true;
      this.state = States.DEFAULT;
      this.error = "";
    },
    onBlur(): void {
      this.focus = false;

      if (!this.required) {
        this.state = States.DEFAULT;
        this.error = "";
        return;
      }

      if (!this.value) {
        this.state = States.ERROR;
        this.error = "Ce champs est requis.";
      } else {
        this.state = States.SUCCESS;
        this.error = "";
      }
    },
    onChange(): void {},
  },

  computed: {
    labelText(): String {
      return this.label + (this.required ? " *" : "");
    },
    labelFor(): String {
      return this.name || "";
    },
    labelStyle(): Object {
      return {
        "transform -translate-y-5 mb-0.5 text-xs": this.focus || this.value,
      };
    },
    hintText(): String {
      return this.error || this.hint || "";
    },
    style(): Object {
      return {
        [`bg-${this.color}-50 border-${this.color}-500 text-${this.color}-500`]:
          this.focus && this.state === States.DEFAULT,
        [`bg-danger-50 border-danger-500 text-danger-500`]: this.state === States.ERROR,
        [`bg-warning-50 border-warning-500 text-warning-500`]:
          this.state === States.WARNING,
        [`bg-success-50 border-success-500 text-success-500`]:
          this.state === States.SUCCESS,
        "bg-gray-100 border-gray-200 text-gray-400":
          !this.focus && this.state === States.DEFAULT,
        "pt-5 pb-2": this.label,
        "py-2": !this.label,
      };
    },
    placeholderText(): String {
      return this.label && !this.focus ? "" : this.placeholder;
    },
    suffixIconValue(): String {
      const icons = {
        [States.ERROR]: "times-circle",
        [States.WARNING]: "exclamation-triangle",
        [States.SUCCESS]: "check-circle",
        [States.DEFAULT]: "",
      };

      return this.suffixIcon || icons[this.state] || "";
    },
  },
});
</script>
