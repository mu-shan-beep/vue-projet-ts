<template>
  <h2>ref+ reactive</h2>
  <p>{{ count }}</p>
  <button @click="updateCount">增加</button>
  <p>name:{{ obj.name }}</p>
  <p>年龄：{{ obj.age }}</p>
  <p>媳妇：{{ obj.wife }}</p>
  <p>{{ obj.gener }}</p>
  <button @click="updateObj">修改Obj</button>
</template>


<script lang="ts">
import Child from "@/components/Child.vue";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  components: {
    Child,
  },
  setup() {
    // let count = 0(此时数据不是响应式数据,响应式数据，数据变化，页面随着变化);
    // ref  返回的是一个ref对象，其中有一个value属性，操作数据需要通过XX.value,但是在模板中不需要使用value
    // ref  一般用来定义基本的响应式数据，复杂的数据类型用reactive定义
    const count = ref(0);

    const obj: any = reactive({
      name: "小明",
      age: "21",
      wife: {
        name: "小甜甜",
        age: "16",
        cars: ["奥迪", "宝马", "奔驰"],
      },
    });

    function updateCount() {
      // count++  报错原因是count是一个ref对象；
      count.value++;
    }

    function updateObj() {
      obj.name += "小刚";
      obj.wife.name += "大甜甜";
      obj.gener = "男";
    }

    // 通过当前代理对象找到该对象中的某个属性，更改该属性中某个数组的数据
    obj.wife.cars[0] = "拖拉机";
    obj.wife.cars.push("四轮车");

    return {
      count,
      obj,
      updateCount,

      updateObj,
    };
  },
});
</script>



<style lang="scss">
</style>
