<template>
  <app-card class="p-6">
    <template v-slot:content>
      <div class="flex flex-col lg:flex-row items-center">
        <div class="flex flex-col justify-center mb-6 lg:mb-0 lg:mr-6">
          <div
            class="rounded-full h-110px w-110px"
            :style="{
              'background-image': 'url(\'' + item.avatar + '\')',
              'background-position': 'center',
              'background-size': 'cover',
            }"
          ></div>
        </div>

        <div class="flex-1">
          <div class="flex flex-col text-center lg:text-left">
            <div>{{ item.content }}</div>

            <div class="text-accent-400 text-base font-semibold mt-4">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '../card/AppCard.vue';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  name: 'opinions-overview-card',
  components: { AppCard },
});
</script>
