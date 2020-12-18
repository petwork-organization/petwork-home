<template>
  <div class="rounded-3xl bg-white shadow-xl">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app-card',
});
</script>
