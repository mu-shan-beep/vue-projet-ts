<template>
  <p>我是Child组件</p>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["msg"],
  beforeCreate() {
    // 数据初始化生命周期回调
    console.log("beforeCreate执行了");
  },
  created() {
    console.log("我是子组件");
  },
  setup() {
	  console.log(this)
    console.log("setup执行了");
  },
});
</script>
