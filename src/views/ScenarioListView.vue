<script setup lang="ts">
import { CommonResponse } from "../models/CommonResponse";
import { Scenario } from "../models/ResponseData";
import { httpClient } from "../utils/httpClient";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { convertFeature } from "../utils/featureConverter";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";

const scenarioList = ref<Scenario[]>([]);
const router = useRouter();
onMounted(async () => {
  const response = await httpClient.get<CommonResponse<Scenario[]>>(
    "/api/get/scenarios/all"
  );
  const responseData = response.data;
  if (!responseData.isSuccess) {
    alert(responseData.error);
    router.back();
    return;
  }

  scenarioList.value = responseData.data!;
});

function sortBy(method: number) {
  scenarioList.value.sort((a, b) => {
    switch (method) {
      case 0:
        return a.id - b.id;
      case 1:
        return b.constant - a.constant;
      case 2:
        return a.package.localeCompare(b.package);
      case 3:
        return a.author.localeCompare(b.author);
      default:
        return a.id - b.id;
    }
  });
}
</script>

<template>
  <div flex="~ col items-center">
    <h1>场景列表</h1>
    <div grid="~ cols-2" w-max gap-2>
      <button @click="sortBy(0)" p-y-2>按 ID 排序</button>
      <button @click="sortBy(1)" p-y-2>按定数排序</button>
      <button @click="sortBy(2)" p-y-2>按包排序</button>
      <button @click="sortBy(3)" p-y-2>按作者排序</button>
    </div>
    <table m-t-4>
      <tr v-for="scenario in scenarioList" cursor-pointer @click="router.push(`id/${scenario.id}`)">
        <td p-1 text-right>
          {{ scenario.id }}
        </td>
        <td>
          <img
            h-12
            w-12
            :src="`http://47.93.57.125:521/WebAPI/public/icons/${scenario.id}.png`"
          />
        </td>
        <td p-1>
          <div grid="~ cols-3" gap-2>
            <span text-left font-bold>{{ scenario.name }}</span>
            <span text-left> by {{ scenario.author }}</span>
            <span text-left> PTT: {{ scenario.constant }} </span>
            <span text-left> 分倍率：{{ scenario.scoreMultiplier }} </span>
            <span text-left> {{ convertFeature(scenario.feature) }}</span>
            <span text-left> 包：{{ scenario.package }}</span>
          </div>
        </td>
        <td>
          <ChevronRightIcon class="h-4 w-4"/>
        </td>
      </tr>
    </table>
  </div>
</template>
