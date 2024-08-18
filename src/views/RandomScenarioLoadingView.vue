<script setup lang="ts">
import { onMounted } from "vue";
import { httpClient } from "../utils/httpClient";
import { useRouter } from "vue-router";
import { CommonResponse } from "../models/CommonResponse";
const router = useRouter();
onMounted(async () => {
  const response = await httpClient.get<CommonResponse<number>>(
    "/api/get/scenarios/random"
  );
  const responseData = response.data;
  if (!responseData.isSuccess) {
    alert(responseData.error);
    router.back();
    return;
  }

  router.replace(`id/${responseData.data}`)
});
</script>

<template>正在测定你的手气...</template>
