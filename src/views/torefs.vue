<template>
  <h2>toRef的使用</h2>
  <!-- <p>{{ state.name }}</p> -->
  <p>{{ name }}</p>
  <p>{{ age }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "小明",
      age: 43,
    });

    const { name, age } = toRefs(state);

    setInterval(() => {
      state.name += "小明";
    }, 1000);

    return {
      //   state,
      // ...state,//此时state不是响应式数据
      name,
      age,
    };
  },
});
</script>
