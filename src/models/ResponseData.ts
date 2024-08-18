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

export interface Scenario {
  id: number;
  name: string;
  scoreMultiplier: number;
  constant: number;
  author: string;
  feature: number;
  package: string;
}

export interface ScenarioPlayerScore {
  nickname: string;
  score: number;
  userId: number;
  qqId: string;
  potential: number;
}

export interface ScenarioScoreListResponseData {
  scenario: Scenario;
  players: ScenarioPlayerScore[];
}