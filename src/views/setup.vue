<template>
  <div>
    <p>我是Setup组件</p>
    <p>父组件</p>
    <p>msg:{{ msg }}</p>
    <button @click="msg += '===='">更新数据</button>
    <p>分发数据:{{ num }}</p>
    <hr />
    <Child :msg="msg" @fn="fn" msg1="sttr测试数据" />
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
    const num = ref(12);
    function fn(val: number) {
      console.log(val);
      num.value = val;
    }
    return {
      msg,
      fn,
      num,
    };
  },
});
</script>
