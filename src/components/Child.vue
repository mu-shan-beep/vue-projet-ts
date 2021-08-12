<template>
  <p>我是Child组件</p>
  <p>{{ msg }}</p>
  <button @click="EmitFn">分发事件</button>
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

  setup(props, context) {
    console.log(props, context);

    console.log(context.attrs.msg1);

    console.log("setup执行了");

    const showMsg1 = function () {
      console.log("setup中的showMsg1");
    };

    const EmitFn = () => {
      context.emit("fn", 10);
    };

    return {
      showMsg1,
      EmitFn,
    };
  },

  // methods: {
  //   showMsg2() {
  //     console.log("methds中的showMsg2");
  //   },
  // },

  mounted() {
    console.log(this);
  },
});
</script>
