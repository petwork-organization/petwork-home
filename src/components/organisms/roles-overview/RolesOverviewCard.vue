<template>
  <app-card>
    <template v-slot:header>
      <div class="flex flex-col justify-center items-center py-4 space-y-6">
        <div class="flex rounded-full h-24 w-24 justify-center items-center bg-primary-500">
          <div class="text-4xl text-white">
            <slot name="badge"></slot>
          </div>
        </div>
        <div class="text-accent-400 font-semibold">
          <slot name="title"></slot>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <div class="flex justify-center text-center">
        <slot name="content"></slot>
      </div>
    </template>
  </app-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '../../molecules/card/AppCard.vue';

export default defineComponent({
  name: 'roles-overview-card',
  components: { AppCard },
});
</script>
