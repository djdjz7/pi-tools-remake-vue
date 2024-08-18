<script setup lang="ts">
import { computed, ref } from "vue";
const dayCount = ref(0);
const medicine = ref(0);
const multiplier = ref(0);

const score = computed(() => {
  return (
    (20000000 * (4 - medicine.value) * (1 + multiplier.value)) /
    (3 * dayCount.value)
  );
});
</script>

<template>
  <h1>分数计算器</h1>
  <div flex="~ col" gap-2>
    <div flex="~ row items-center">
      <span m-r-2>天数</span>
      <input flex-grow-1 type="number" v-model="dayCount" />
    </div>
    <div flex="~ row items-center">
      <span m-r-2>解药</span>
      <input flex-grow-1 type="number" v-model="medicine" />
    </div>
    <div flex="~ row items-center">
      <span m-r-2>分倍率</span>
      <input flex-grow-1 type="number" v-model="multiplier" />
    </div>
    <span v-show="Number.isFinite(score)" font-bold text-xl>分数: {{ score.toFixed(0) }}</span>
  </div>
</template>

<style scoped>
input {
  font-family: Inter;
  --at-apply: p-y-2 p-x-3 border-1 border-solid border-gray/40 rounded-2 dark:bg-dark
    transition-all duration-200
    focus:ring-2 ring-offset-1 ring-gray/50
   text-dark dark:text-light
   hover:shadow-md;
}
input:focus {
  outline: none;
}
</style>
