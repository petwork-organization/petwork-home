<template>
  <app-card>
    <template v-slot:content>
      <div class="p-6">
        <div class="flex flex-col justify-center items-center">
          <div
            class="flex rounded-full h-90px w-90px justify-center items-center bg-gradient-to-tr from-primary-500 to-secondary-400 text-3xl font-extrabold text-white"
          >
            <slot name="badge"></slot>
          </div>

          <div class="text-accent-400 text-xl mt-4 font-semibold">
            <slot name="title"></slot>
          </div>
        </div>

        <div class="flex justify-center text-center mt-4">
          <slot name="content"></slot>
        </div>
      </div>
    </template>
  </app-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '../card/AppCard.vue';

export default defineComponent({
  name: 'roles-overview-card',
  components: { AppCard },
});
</script>
