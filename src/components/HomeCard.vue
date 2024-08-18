<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
defineProps<{
  title: string;
  image?: string;
  href: string;
}>();
</script>

<template>
  <div
    cursor-pointer
    p-4
    rounded-xl
    bg-gradient-to-r
    from-white
    to-slate-100
    border-slate
    dark:from-dark-700
    dark:to-dark-900
    dark:border-dark-800
    border-1
    border-solid
    shadow-lg
    hover:shadow-xl
    transition-all
    duration-150
    @click="router.push(href)"
  >
    <span>{{ title }}</span>
  </div>
</template>
