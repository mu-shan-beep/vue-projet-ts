<template>
  <div>
    <h2>我是inject组件</h2>
    <p>state:{{ state }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  setup() {
    const state = inject("state");
    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>