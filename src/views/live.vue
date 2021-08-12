<template>
  <h2>声明周期组件</h2>
  <p>text:{{ text }}</p>
  <button @click="update">更新数据</button>
</template>


<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "live",
  setup() {
    const text = ref("123");
    const update = () => {
      text.value += "123";
    };

    onBeforeMount(() => {
      console.log("我是Vue3的onBeforeMount");
    });

    onMounted(() => {
      console.log("我是Vue3的onMounted");
    });
    onBeforeUpdate(() => {
      console.log("我是Vue3的onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("我是Vue3的onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("我是Vue3的onbBeforeUnmounted");
    });
    onUnmounted(() => {
      console.log("我是Vue3的onUnmounted");
    });

    return {
      text,
      update,
    };
  },
});
</script>
