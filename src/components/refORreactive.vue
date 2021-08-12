<template>
  <h2>ref对比reactive</h2>
  <p>m1::{{ m1 }}</p>
  <p>m2::{{ m2 }}</p>
  <p>m3::{{ m3 }}</p>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "reactiveAndrefStudy",

  setup() {
    //   通过ref设置的数据
    const m1 = ref("abc");
    const m2 = reactive({
      name: "小明",
      age: "21",
      wife: {
        name: "小紅",
        age: "21",
      },
    });
    // ref也可以传入对象
    const m3 = ref({
      name: "小明",
      age: "21",
      wife: {
        name: "小紅",
        age: "21",
      },
    });

    // 更新数据
    const update = () => {
      m1.value += "+++";
      m2.wife.name += "+++";
      m3.value.wife.name += "+++";
    };

    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>
