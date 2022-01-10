<template>
  <div>
    <h2>CustomRef的使用</h2>
    <input type="text" v-model="keyword" />
    <p>{{ keyword }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, customRef } from "vue";
// 自定义防抖函数
function userDeouncedRef<T>(value: T, delay = 500) {
  let timerID: number;
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      set(newVal: T) {
        console.log(newVal, "asaaaa");
        clearTimeout(timerID);
        timerID = setTimeout(() => {
          value = newVal;
          // 告诉vue更新数据
          trigger();
        }, delay);
      },
    };
  });
}

export default defineComponent({
  setup() {
    // const keyword = ref("abc");
    const keyword = userDeouncedRef("abc", 500);
    return {
      keyword,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>