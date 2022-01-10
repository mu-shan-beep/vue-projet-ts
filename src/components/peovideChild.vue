<template>
  <div>
    <h2>我是Provide中间组件</h2>
    <inject />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import inject from "@/components/inject.vue";
export default defineComponent({
  components: { inject },
  setup() {},
});
</script>

<style lang="scss" scoped>
</style>