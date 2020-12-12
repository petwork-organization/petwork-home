<template>
  <div class="p-4 md:p-24">
    <!-- BUTTONS -->
    <h1 class="font-extrabold text-4xl ml-2 mb-4">Buttons</h1>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Filled</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :isDisabled="true">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" icon="home"> </app-button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Monochrome</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.MONOCHROME">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.MONOCHROME" :isDisabled="true">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.MONOCHROME" icon="home"></app-button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Outlined</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.OUTLINED">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.OUTLINED" :isDisabled="true">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.OUTLINED" icon="home"></app-button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Transparent</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.TRANSPARENT">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.TRANSPARENT" :isDisabled="true">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.TRANSPARENT" icon="home"></app-button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">With icons</h2>

      <div class="flex">
        <div class="m-2">
          <app-button prefixIcon="arrow-left">Prefix</app-button>
        </div>
        <div class="m-2">
          <app-button suffixIcon="arrow-right">Suffix</app-button>
        </div>
        <div class="m-2">
          <app-button prefixIcon="arrow-left" suffixIcon="arrow-right">Both</app-button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Link</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button :color="color" :type="buttonTypes.LINK" :tag="'a'">{{ color }}</app-button>
        </div>
      </div>
    </div>

    <!-- Inputs -->
    <h1 class="font-extrabold text-4xl ml-2 mb-4 mt-12">Inputs</h1>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Classic</h2>

      <div class="m-2 w-full md:w-400px">
        <app-input placeholder="Placeholder..."></app-input>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Hint</h2>

      <div class="m-2 w-full md:w-400px">
        <app-input placeholder="Placeholder..." :hint="'Please type something'"></app-input>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Label</h2>

      <div class="m-2 w-full md:w-400px">
        <app-input placeholder="Placeholder..." :label="'Label'"></app-input>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Required</h2>

      <div class="m-2 w-full md:w-400px">
        <app-input placeholder="Placeholder..." :label="'Label'" required></app-input>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Prefix icon</h2>

      <div class="m-2 w-full md:w-400px">
        <app-input placeholder="Placeholder..." :prefixIcon="'home'"></app-input>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Suffix icon</h2>

      <div class="m-2 w-full md:w-400px">
        <app-input placeholder="Placeholder..." :suffixIcon="'question-circle'"></app-input>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">All in one</h2>

      <div class="m-2 w-full md:w-400px">
        <app-input
          placeholder="Placeholder..."
          :label="'Label'"
          :prefixIcon="'home'"
          :suffixIcon="'question-circle'"
        ></app-input>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Password</h2>

      <div class="m-2 w-full md:w-400px">
        <app-input type="password" :label="'Password'" :prefixIcon="'lock'"></app-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '@atoms/button/AppButton.vue';
import { ButtonTypes } from '@atoms/button/button.utils';
import { Colors } from '@components/utils';
import AppInput from '@atoms/input/AppInput.vue';

export default defineComponent({
  components: {
    AppButton,
    AppInput,
  },
  data() {
    return {
      buttonTypes: ButtonTypes,
      colors: Object.values(Colors),
    };
  },
});
</script>
