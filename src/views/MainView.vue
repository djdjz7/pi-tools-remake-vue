<script setup lang="ts">
import HomeCard from "../components/HomeCard.vue";
</script>

<template>
  <div flex="~ col" gap-2>
    <HomeCard title="分数计算器" href="calc" />
    <HomeCard title="个人场景库成绩查询" href="query" />
    <HomeCard title="试试手气？" href="scenarios/random" />
    <HomeCard title="场景列表" href="scenarios/all" />
  </div>
</template>
