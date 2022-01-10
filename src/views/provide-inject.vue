<template>
  <div>
    <h2>provied和inject的使用</h2>
    <p>{{ state }}</p>
    <provide-child />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, provide } from "vue";
import provideChild from "@/components/peovideChild.vue";
export default defineComponent({
  components: {
    provideChild,
  },

  setup() {
    const state = reactive({
      name: "小明",
      age: 12,
      wife: { name: "小红", gener: "男" },
    });

	provide("state",state);

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>