<template>
<div>
  
</div>
</template>

<script lang="ts">
// defineComponent函数，定义一个组件，组件内部传入配置项
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; 
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
