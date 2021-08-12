<template>
  <h2>ref获取元素</h2>
  <input type="text" ref="inputRef" placeholder="" />
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const inputRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });
    return {
      inputRef,
    };
  },
});
</script>
