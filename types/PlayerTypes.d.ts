export default {};

declare global {
  interface Player {
    slatePlayerId: number;
    slateId: number;
    slateGameId: number;
    playerId: number;
    playerGameProjectionStatId: number;
    fantasyDefenseProjectionStatId: null;
    operatorPlayerId: string;
    operatorSlatePlayerId: string;
    operatorPlayerName: string;
    operatorPosition: string;
    operatorSalary: number;
    team: string;
    teamId: number;
    removedByOperator: false;
    operatorRosterSlots: Array<string>;
    fantasyPoints: number;
    fantasyPointsPerDollar: number;
    projectedOwnership: number;
  }
}
