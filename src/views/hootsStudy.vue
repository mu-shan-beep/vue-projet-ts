<template>
  <h2>hoots组件案例</h2>
  <p>X:{{ y }},Y:{{ y }}</p>
  <p v-if="loading">加载中</p>
  <p v-else-if="errorMsg">错误信息{{ errorMsg }}</p>
  <!-- <ul v-else>
    <li>{{ data.id }}</li>
    <li>{{ data.address }}</li>
    <li>{{ data.distance }}</li>
  </ul> -->

  <ul v-for="item in data" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.tittle }}</li>
    <li>{{ item.price }}</li>
  </ul>
</template>


<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";
import userMousePosition from "@/hoots/userMousePosition";
import userRequest from "@/hoots/userRequest";
interface IAddressData {
  id: number;
  adress: string;
  distance: string;
}

interface IProductsData {
  id: string;
  tittle: string;
  price: number;
}

export default defineComponent({
  name: "hoots",
  setup() {
    const { x, y } = userMousePosition();
    const { loading, data, errorMsg } = userRequest<IAddressData>("/data/address.json");
    // const { loading, data, errorMsg } = userRequest<IProductsData[]>(
    //   "/data/products.json"
    // );
    // watch(data, () => {
    //   console.log(data.value.length);
    // });

    return { x, y, loading, data, errorMsg };
  },
});
</script>
