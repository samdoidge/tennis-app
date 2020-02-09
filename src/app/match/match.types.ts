interface MatchBase<T> {
  id: string;
  side1: Array<T>;
  side2: Array<T>;
  status: MatchStatus;
}

export interface MatchSummary extends MatchBase<MatchSummarySideObject> {}

export interface MatchToCreate {
  side1: Array<MatchSummarySideObject>;
  side2: Array<MatchSummarySideObject>;
}

export interface MatchCreated {
  id: string;
}

export enum MatchStatus {
  Created = 'Created',
  Playing = 'Playing',
  Finished = 'Finished'
}



export interface MatchSummarySideObject {
  name: string;
}

export interface MatchDetailSideObject extends MatchSummarySideObject {
  score: number;
}

export interface MatchDetail extends MatchBase<MatchDetailSideObject> {
  sets: Array<MatchSetObject>;
}

export interface MatchSetObject {
  id: string;
  status: MatchStatus;
  side1Score: number;
  side2Score: number;
  games: Array<MatchGameObject>;
}

export interface MatchGameObject {
  id: string;
  points: Array<number>;
}
