<script setup lang="ts">
import { onMounted, ref } from "vue";
import { httpClient } from "../utils/httpClient";
import { useRoute, useRouter } from "vue-router";
import { CommonResponse } from "../models/CommonResponse";
import {
  PlayerScoreQueryResponseData,
  PlayerCondensed,
  ScenarioScore,
} from "../models/ResponseData";

const route = useRoute();
const router = useRouter();
const qqid = route.params.qqid;
const playerInfo = ref<PlayerCondensed>();
const scenarioScores = ref<ScenarioScore[]>();

onMounted(async () => {
  if (qqid) {
    var response = await httpClient.get(`/api/get/playerscore?qq=${qqid}`);
    var responseData =
      response.data as CommonResponse<PlayerScoreQueryResponseData>;
    if (!responseData.isSuccess) {
      switch (responseData.error) {
        case "PLAYER_NOT_FOUND":
          alert(
            "该用户不存在！\n请在pi加盟群进行注册！\n如果对自己用户状态有疑问，请咨询管理员！"
          );
          router.push("/query");
          break;
        case "PLAYER_BANNED":
          alert("该用户已被封禁！");
          router.push("/query");
          break;
      }
      return;
    }
    playerInfo.value = responseData.data?.player;
    scenarioScores.value = responseData.data?.scenarioScores;
  } else {
    alert("未提供 QQ 号");
    router.push("/query");
  }
});
</script>

<template>
  <div flex="~ col items-start">
    <h1>个人场景库成绩</h1>
    <div flex="~ items-center">
      <img
        rounded-full
        h-20
        w-20
        m-r-4
        :src="`https://q.qlogo.cn/g?b=qq&nk=${playerInfo?.qqid}&s=100`"
      />
      <div flex="~ col items-start">
        <div>
          <span font-bold text-2xl>{{ playerInfo?.nickname }}</span>
          <span m-l-2 font-bold text-2xl> #{{ playerInfo?.rank }}</span>
        </div>
        <div>
          <span>PTT: {{ playerInfo?.potential }}</span>
          <span m-l-2>总分：{{ playerInfo?.scoreSum }}</span>
        </div>
      </div>
    </div>

    <div m-t-2 flex-grow-1 flex-shrink-1>
      <div v-for="scenarioScore in scenarioScores" flex="~ items-center" gap-2>
        <img h-12 w-12 :src="`http://47.93.57.125:521/WebAPI/public/icons/${scenarioScore.scenarioID}.png`"/>
        <span font-bold>{{ scenarioScore.scenarioName }}</span>
        <span text-amber>{{ scenarioScore.score }}</span>
        <span>PTT: {{ scenarioScore.rating }}</span>
      </div>
    </div>
  </div>
</template>
