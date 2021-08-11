<template>
  <h2>父组件</h2>
  <hr />
  <!-- <Home /> -->
  <setup />
  <router-view />
</template>


<script lang="ts">
import Home from "@/views/Home.vue";
import setup from "@/views/setup.vue";

import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  components: {
    Home,
    setup,
  },
  setup() {
    return {};
  },
});
</script>



<style lang="scss">
</style>
