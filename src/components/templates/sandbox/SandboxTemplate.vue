<template>
  <div class='py-2 md:py-12'></div>

  <div class="px-4 md:px-24">
    <!-- BUTTONS -->
    <h1 class="font-extrabold text-4xl ml-2 mb-4">Buttons</h1>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Filled</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :isDisabled="true">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" icon="home"> </app-button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Outlined</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.OUTLINED">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.OUTLINED" :isDisabled="true">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.OUTLINED" icon="home"></app-button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Transparent</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.TRANSPARENT">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.TRANSPARENT" :isDisabled="true">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.TRANSPARENT" icon="home"></app-button>
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
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.LINK" :tag="'a'">{{ color }}</app-button>
        </div>
      </div>
    </div>
  </div>

  <div class="px-4 py-4 my-6 md:px-24 bg-gradient-to-tr from-secondary-500 to-primary-500 text-white">
    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Filled monochrome</h2>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.FILLED_MONOCHROME">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.FILLED_MONOCHROME" :isDisabled="true">{{ color }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="color in colors" v-bind:key="color">
          <app-button v-if="color !== Colors.LIGHT" :color="color" :type="ButtonTypes.FILLED_MONOCHROME" icon="home"></app-button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="font-bold text-xl ml-2">Light variants</h2>

      <div class="flex">
        <div class="m-2" v-for="type in buttonTypes" v-bind:key="type">
          <app-button v-if="type !== ButtonTypes.LINK" :color="Colors.LIGHT" :type="type">{{ type }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="type in buttonTypes" v-bind:key="type">
          <app-button v-if="type !== ButtonTypes.LINK" :color="Colors.LIGHT" :type="type" :isDisabled="true">{{ type }}</app-button>
        </div>
      </div>

      <div class="flex">
        <div class="m-2" v-for="type in buttonTypes" v-bind:key="type">
          <app-button v-if="type !== ButtonTypes.LINK" :color="Colors.LIGHT" :type="type" icon="home"></app-button>
        </div>
      </div>

      <div class="m-2">
        <app-button :tag="'a'" :color="Colors.LIGHT" :type="ButtonTypes.LINK">Link</app-button>
      </div>
    </div>
  </div>

  <div class="px-4 md:px-24">
    <!-- BUTTONS TOGGLE -->
    <h1 class="font-extrabold text-4xl ml-2 mb-4">Button toggle</h1>

    <div class="mt-4" v-for="color in colors" v-bind:key="color">
      <h2 class="font-bold text-xl ml-2" v-if="color !== Colors.LIGHT">{{ color }}</h2>

      <div class="m-2" v-if="color !== Colors.LIGHT">
        <app-button-toggle :color="color" :items="buttonToggleItems" v-model="buttonToggleModel"></app-button-toggle>
      </div>
    </div>
  </div>

  <div class="px-4 py-4 my-6 md:px-24 bg-gradient-to-tr from-secondary-500 to-primary-500 text-white">
    <h2 class="font-bold text-xl ml-2">Light</h2>

    <div class="m-2">
      <app-button-toggle :color="Colors.LIGHT" :items="buttonToggleItems" v-model="buttonToggleModel"></app-button-toggle>
    </div>
  </div>

  <div class="px-4 md:px-24">
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

  <div class='py-2 md:py-12'></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '../../atoms/button/AppButton.vue';
import AppInput from '../../atoms/input/AppInput.vue';
import AppButtonToggle from '../../molecules/button-toggle/AppButtonToggle.vue';
import { ButtonTypes } from '../../atoms/button/button.utils';
import { Colors } from '../../utils';

export default defineComponent({
  components: {
    AppButton,
    AppInput,
    AppButtonToggle,
  },
  data() {
    return {
      ButtonTypes: ButtonTypes,
      Colors: Colors,
      colors: Object.values(Colors),
      buttonTypes: Object.values(ButtonTypes),
      buttonToggleItems: [
        { value: 1, label: 'Item 1' },
        { value: 2, label: 'Item 2' },
        { value: 3, label: 'Item 3' },
      ],
      buttonToggleModel: '',
    };
  },
});
</script>
