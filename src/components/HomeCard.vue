<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{
  title: string;
  image?: string;
  href: string;
}>();
</script>

<template>
  <div
    p-4
    rounded-xl
    bg-gradient-to-r
    from-white
    to-slate-100
    border-slate
    border-1
    border-solid
    shadow-lg
    @click="router.push(href)"
  >
    <span>{{ title }}</span>
  </div>
</template>
