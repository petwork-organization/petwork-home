<template>
  <div class="rounded-lg bg-white shadow-xl">
    <div>
      <slot name="header"></slot>
    </div>

    <div class="p-4">
      <slot name="content"></slot>
    </div>

    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app-card',
});
</script>