<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useRouter } from "vue-router";

const qqid = ref(null);
const router = useRouter();

const handleSubmit = () => {
  if (qqid.value) {
    router.push(`/query/${qqid.value}`);
  } else {
    alert("未提供 QQ 号");
  }
};
</script>

<template>
  <h1>查分！</h1>
  <div flex="~ items-center" gap-2>
    <input type="number" placeholder="QQ 号" v-model="qqid" />
    <button
      @click="handleSubmit"
      class="!rounded-full !h-10 !w-10 !p-0"
      flex="~ items-center justify-center"
    >
      <ArrowRightIcon class="h-5 w-5" />
    </button>
  </div>
</template>

<style scoped>
input {
  font-family: Inter;
  @apply p-y-2 p-x-3 border-1 border-solid border-gray/40 rounded-2 dark:bg-dark;
  @apply transition-all duration-200;
  @apply focus:ring-2 ring-offset-1 ring-gray/50;
  @apply text-dark dark:text-light;
  @apply hover:shadow-md;
}
input:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
