<template>
  <div>
    <p>我是Setup组件</p>
    <p>父组件</p>
    <p>msg:{{ msg }}</p>
    <button @click="msg += '===='">更新数据</button>
    <hr />
    <Child :msg="msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "@/components/Child.vue";
export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const msg = ref("what  are you no  she  lei");
    return {
      msg,
    };
  },
});
</script>
