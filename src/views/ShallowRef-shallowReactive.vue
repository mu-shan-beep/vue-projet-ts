<template>
  <h2>shallowReactive和shallowRef</h2>
  <p>m1-Ref：{{ m1 }}</p>
  <p>m2-shallowRef：{{ m2 }}</p>
  <p>m3-Reactive：{{ m3 }}</p>
  <p>m4-shallowReactive：{{ m4 }}</p>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";

export default defineComponent({
  setup() {
    const m1 = ref({
      name: "小明",
      age: 20,
      cars: { color: "red", name: "奔驰" },
    });
    const m2 = shallowRef({
      name: "小明",
      age: 20,
      cars: { color: "red", name: "奔驰" },
    });
    const m3 = reactive({
      name: "小明",
      age: 20,
      cars: { color: "red", name: "奔驰" },
    });

    const m4 = shallowReactive({
      name: "小明",
      age: 20,
      cars: { color: "red", name: "奔驰" },
    });

    const update = () => {
    //   m1.value.name += "--小红";
    //   m2.value.name += "--小红";
    //   m3.name += "--小红";
    //   m4.name += "--小红";

    //   m1.value.cars.color += "+yellow";
    //   m2.value.cars.color += "+yellow";
    //   m3.cars.color += "+yellow";
    //   m4.cars.color += "+yellow";
    };

    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>


<style>
</style>