export default {};

declare global {
  interface Operator {
    _id: string;
    id: string;
    season: number;
    seasonType: number;
    slateId: number;
    week: number;
    _lastUpdatedDate: string;
    isMultiDaySlate: boolean;
    numberOfGames: number;
    operator: string;
    operatorDay: string;
    operatorGameType: string;
    operatorName: string;
    operatorSlateId: number;
    operatorStartTime: string;
    removedByOperator: boolean;
    salaryCap: number;
    dfsSlateGames: Array<object>;
    dfsSlatePlayers: Player[];
    slateRosterSlots: Array<object>;
  }
}
