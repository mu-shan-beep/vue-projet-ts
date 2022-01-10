<template>
  <h2>toRaw和markRaw</h2>
  <p>state:{{ state }}</p>
  <p>user：{{ user }}</p>
  <button @click="testToraw">toRaw</button>
  <button @click="testMarkRaw">testMarkRaw</button>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent, markRaw, reactive, toRaw } from "vue";
import { useRoute } from "vue-router";
interface userInfo {
  name?: string;
  age?: number;
  cars?: object;
  likes?: string[];
}
export default defineComponent({
  setup() {
    console.log(store);
    // store.commit("changeAbc", "1111111111111111");
    store.dispatch("changeA", "22222222");
    const state = reactive<userInfo>({
      name: "小明",
      age: 20,
      cars: {
        color: "red",
        name: "奔驰",
      },
    });


    

    const testToraw = () => {
      const user = toRaw(state);
      user.name += "小明";
      user.likes = ["吃", "喝"];
    };

    const testMarkRaw = () => {
      // state.likes = ["吃", "喝"];
      // state.likes[0] += "==";
      state.likes = markRaw(["吃", "喝"]);
      setInterval(() => {
        if (state.likes) {
          state.likes[0] += "==";
          console.log("定时器");
        }
      }, 1000);
    };

    return { state, testToraw, testMarkRaw };
  },
});
</script>
