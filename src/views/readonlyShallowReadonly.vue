<template>
  <h2>readonly和shallowreadonly</h2>
  <p>state:{{ state }}</p>
  <p>state2-readonly:{{ state2 }}</p>
  <p>state2-shallowreadonly:{{ state3 }}</p>

  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "小明",
      age: 21,
      cars: {
        color: "red",
        name: "奔驰",
      },
    });

    const state2 = readonly(state);
    const state3 = shallowReadonly(state);

    const update = () => {
      // state2.name += "小明";
      // state2.cars.name += "宝马";
      // state3.name = "小明";
      state3.cars.name = "宝马";
    };
    return {
      state,
      state2,
      state3,
      update,
    };
  },
});
</script>
