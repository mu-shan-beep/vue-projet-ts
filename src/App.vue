<template>
  <h2>父组件</h2>
  <hr />
  <!--  <setup />
  <hr />
  <refandreactive />
  <hr />
  <computeds />
  <hr />
  <watch />
  <hr /> -->
  <div><router-link to="/hoots">进入hoots</router-link></div>
  <div><router-link to="/torefs">进入torefs</router-link></div>
  <div><router-link to="/refelement">进入refElement</router-link></div>
  <div><router-link to="/shallow">进入shallow</router-link></div>
  <div><router-link to="/readonly">进入readonly</router-link></div>
  <div><router-link to="/toraw">进入toraw</router-link></div>

  <button @click="isShow = !isShow">显示隐藏</button>
  <live v-if="isShow" />
  <hr />
  <router-view></router-view>
</template>


<script lang="ts">
import Home from "@/views/Home.vue";
import setup from "@/views/setup.vue";
import refandreactive from "@/views/refORreactive.vue";
import computeds from "@/views/computed.vue";
import watch from "@/views/watch.vue";
import live from "@/views/live.vue";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  components: {
    Home,
    setup,
    refandreactive,
    computeds,
    watch,
    live,
  },
  setup() {
    const isShow = ref(true);
    return {
      isShow,
    };
  },
});
</script>



<style lang="scss">
</style>
