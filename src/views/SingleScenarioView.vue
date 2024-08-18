<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  Scenario,
  ScenarioPlayerScore,
  ScenarioScoreListResponseData,
} from "../models/ResponseData";
import { httpClient } from "../utils/httpClient";
import { CommonResponse } from "../models/CommonResponse";
import { convertFeature } from "../utils/featureConverter";

const route = useRoute();
const router = useRouter();

const scenarioId = route.params.id;

const scenario = ref<Scenario>();
const players = ref<ScenarioPlayerScore[]>();

onMounted(async () => {
  const response = await httpClient.get<
    CommonResponse<ScenarioScoreListResponseData>
  >(`/api/get/scenarios/scores?id=${scenarioId}`);
  const responseData = response.data;
  if (!responseData.isSuccess) {
    alert(responseData.error);
    router.back();
    return;
  }

  scenario.value = responseData.data!.scenario;
  players.value = responseData.data!.players.sort((a, b) => b.score - a.score);
});
</script>

<template>
  <div flex="~ col items-center">
    <h1>场景库排名</h1>
    <div flex>
      <img
        h-24
        w-24
        :src="`http://47.93.57.125:521/WebAPI/public/icons/${scenarioId}.png`"
      />
      <div flex="~ col items-start" m-l-4>
        <span text-2xl font-bold>{{ scenario?.name }}</span>
        <span>定数：{{ scenario?.constant }}</span>
        <span>{{ convertFeature(scenario?.feature) }}</span>
      </div>
    </div>
    <table m-t-4>
      <tr v-for="(player, index) in players">
        <td text-right font-bold>#{{ index + 1 }}</td>
        <td p-l-4>
          <img
            rounded-full
            h-12
            w-12
            :src="`https://q.qlogo.cn/g?b=qq&nk=${player?.qqId}&s=100`"
          />
        </td>
        <td p-l-2>
          <div flex="~ items-center" gap-4>
            <span text-xl font-bold>{{ player?.nickname }}</span>
            <span text-amber>{{ player?.score }}</span>
            <span>PTT: {{ player.potential }}</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
