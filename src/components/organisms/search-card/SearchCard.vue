<template>
  <app-card>
    <template v-slot:content>
      <div class="flex">
        <div class="flex-auto mr-5">
          <div class="text-bold text-primary-500 mb-1">Quel animal ?</div>
          <app-input placeholder="Quelle race d'animal ?"></app-input>
        </div>

        <div class="flex-auto ml-5">
          <div class="text-bold text-primary-500 mb-1">Quelle région ?</div>
          <app-input placeholder="Où habitez-vous ?"></app-input>
        </div>
      </div>

      <div class="flex justify-center">
        <app-button prefixIcon="search">Rechercher</app-button>
      </div>
    </template>
  </app-card>
</template>

<script>
import { defineComponent } from 'vue';
import AppCard from '@molecules/card/Card.vue';
import AppButton from '@atoms/button/Button.vue';
import AppInput from '@atoms/input/Input.vue';

export default defineComponent({
  components: { AppCard, AppButton, AppInput },
  name: 'app-search-card',
});
</script>
