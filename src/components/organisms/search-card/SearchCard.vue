<template>
  <app-card>
    <template v-slot:content>
      <div class="flex">
        <div class="flex-auto mr-5">
          <div class="font-semibold text-accent-400 mb-1">Genre d'animal</div>
          <app-input placeholder="Quelle race recherchez-vous ?"></app-input>
        </div>

        <div class="flex-auto ml-5">
          <div class="font-semibold text-accent-400 mb-1">Zone</div>
          <app-input placeholder="Dans quelle région habitez-vous ?"></app-input>
        </div>
      </div>

      <div class="flex justify-center">
        <app-button suffixIcon="search">Rechercher</app-button>
      </div>
    </template>
  </app-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from '@molecules/card/AppCard.vue';
import AppButton from '@atoms/button/AppButton.vue';
import AppInput from '@atoms/input/AppInput.vue';

export default defineComponent({
  components: { AppCard, AppButton, AppInput },
  name: 'search-card',
});
</script>
