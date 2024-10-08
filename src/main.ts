import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:uno.css";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/MainView.vue"),
  },
  {
    path: "/calc",
    component: () => import("./views/CalculatorView.vue"),
  },
  {
    path: "/query",
    component: () => import("./views/PlayerQQInputView.vue"),
  },
  {
    path: "/query/:qqid",
    component: () => import("./views/PlayerScoreView.vue"),
  },
  {
    path: "/scenarios/all",
    component: () => import("./views/ScenarioListView.vue"),
  },
  {
    path: "/scenarios/id/:id",
    component: () => import("./views/SingleScenarioView.vue"),
  },
  {
    path: '/scenarios/random',
    component: () => import('./views/RandomScenarioLoadingView.vue')
  }
];

const router = createRouter({ routes, history: createWebHistory() });

createApp(App).use(router).mount("#app");
