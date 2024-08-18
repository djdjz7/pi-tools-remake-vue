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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
