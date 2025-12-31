export enum Suit {
  Spades = "S",
  Hearts = "H",
  Clubs = "C",
  Diamonds = "D",
}

export enum Rank {
  Two = 2,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack = 11,
  Queen = 12,
  King = 13,
  Ace = 14,
}

export interface Card {
  id: string;
  suit: Suit;
  rank: Rank;
}

export enum GamePhase {
  LOBBY = "LOBBY",
  HAKIM_DETERMINATION = "HAKIM_DETERMINATION",
  DEALING_INITIAL = "DEALING_INITIAL", // First 4
  HAKIM_CHOOSING_SUIT = "HAKIM_CHOOSING_SUIT",
  DEALING_REMAINDER = "DEALING_REMAINDER",
  PLAYING = "PLAYING",
  ROUND_END = "ROUND_END",
  MATCH_END = "MATCH_END",
}

export interface Player {
  id: string;
  name: string;
  hand: Card[];
  teamId: number; // 1 or 2
  isConnected: boolean;
}

export interface GameState {
  roomId: string;
  phase: GamePhase;
  players: Player[];
  deck: Card[]; // Remaining deck (for dealing)
  hakimId: string | null;
  hokm: Suit | null;
  currentTurnPlayerId: string | null;
  tableCards: { playerId: string; card: Card }[];

  // Scoring
  scores: { [teamId: number]: number }; // Set wins (up to 7)
  currentRoundTricks: { [teamId: number]: number }; // Tricks in current hand

  // Animation specific state (local)
  hakimDeterminationCards: Card[]; // Cards flipped to find Ace
  lastWinnerId: string | null;
  logs: string[];
}

export const SUIT_ICONS = {
  [Suit.Spades]: "♠",
  [Suit.Hearts]: "♥",
  [Suit.Clubs]: "♣",
  [Suit.Diamonds]: "♦",
};

export const SUIT_COLORS = {
  [Suit.Spades]: "text-cardBlack",
  [Suit.Hearts]: "text-cardRed",
  [Suit.Clubs]: "text-cardBlack",
  [Suit.Diamonds]: "text-cardRed",
};
