<template>
  <span v-for="(item, i) in list" :ref="(el) => { divs[i] = el; }" :key="item">
    {{ item }}
    <span v-if="i != Object.keys(list).length - 1">-&nbsp;</span>
  </span>
</template>

<script setup>
import { onBeforeUpdate, reactive, ref } from "vue";

const year = new Date().getFullYear();
const list = reactive([2019, year]);
const divs = ref([]);

onBeforeUpdate(() => {
  divs.value = [];
});
</script>
