<template>
  <h2>监听属性和计算属性</h2>
  <fieldset>
    <legend>姓名操作:</legend>
    姓氏<input type="text" v-model="user.firstName" placeholder="请输入姓氏" />
    <br />
    名字:<input type="text" v-model="user.lastName" placeholder="请输入名字" />
  </fieldset>
  <fieldset>
    <legend>监听属性的演示</legend>
    姓名<input type="text" v-model="fullName1" placeholder="显示姓名" />
    <br />
    姓名<input type="text" v-model="fullName2" placeholder="显示姓名" />
    <br />
    姓名<input type="text" v-model="fullName3" placeholder="显示姓名" />
  </fieldset>
</template>


<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  watch,
  ref,
  watchEffect,
} from "vue";

export default defineComponent({
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });

    // 通过计算属性显示姓名
    // 计算属性中如果只传入一个回调，代表是get
    // 返回的是一个ref对象
    const fullName1 = computed(() => {
      return user.lastName + user.firstName;
    });

    const fullName2 = computed({
      get() {
        return user.firstName + "-" + user.lastName;
      },
      set(val: string) {
        const names = val.split("-");
        user.lastName = names[0];
        user.firstName = names[1];
      },
    });

    const fullName3 = ref("");

    // watch(
    //   user,
    //   ({ firstName, lastName }) => {
    //     fullName3.value = firstName + lastName;
    //   },
    //   { immediate: true, deep: true }
    // );

    // watchEffect(() => {
    //   fullName3.value = user.firstName + user.lastName;
    // });

    // watchEffect(() => {
    // 	 console.log(fullName3,"fullName3");
    //   const names = fullName3.value.split("-");
    //   user.firstName = names[0];
    //   user.lastName = names[1];
    // });

    // watch([()=>user.firstName,()=>user.lastName,()=>fullName3],()=>{
    // 	console.log("我是多个监听数据");
    // });

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>
