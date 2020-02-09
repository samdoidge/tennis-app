export interface MatchSummary {
  id: string;
  side1: Array<MatchSummarySideObject>;
  side2: Array<MatchSummarySideObject>;
  status: MatchStatus;
}

export enum MatchStatus {
  Created = 'Created',
  Playing = 'Playing',
  Finished = 'Finished'
}

export interface MatchSummarySideObject {
  name: string;
}
