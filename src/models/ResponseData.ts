export interface PlayerCondensed {
  userID: number;
  qqid: string;
  nickname: string;
  potential: number;
  banned: boolean;
  scoreSum: number;
  rank: number;
}

export interface ScenarioScore {
  scenarioID: number;
  scenarioName: string;
  score: number;
  rating: number;
}

export interface PlayerScoreQueryResponseData {
  player: PlayerCondensed;
  scenarioScores: ScenarioScore[];
}
