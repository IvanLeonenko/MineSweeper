/**
 * Game difficulty enum
 * @enum
 * @type {object}
 */
export const GameDifficulty = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3
};

const DifficultyColor = {
  [GameDifficulty.EASY]: "#6fd9ba",
  [GameDifficulty.MEDIUM]: "#f2cd67",
  [GameDifficulty.HARD]: "#ff877e"
};

const BoardConfig = {
  [GameDifficulty.EASY]: { width: 10, height: 20, mines: 20 }, // 10%
  [GameDifficulty.MEDIUM]: { width: 20, height: 30, mines: 72 }, // 12%
  [GameDifficulty.HARD]: { width: 30, height: 40, mines: 240 }  // 20%
};

/**
 * Get difficulty name
 * @param {difficulty} difficulty
 * @returns {string}
 */
export function getGameDifficultyName(difficulty) {
  switch (difficulty) {
    case GameDifficulty.EASY:
      return "Easy";
    case GameDifficulty.MEDIUM:
      return "Medium";
    case GameDifficulty.HARD:
      return "Hard";
    default:
      return "";
  }
}

/**
 * Get difficulty color
 * @param {difficulty} difficulty
 * @returns {string}
 */
export function getDifficultyColor(difficulty) {
  return DifficultyColor[difficulty];
}

export function getDifficultyBoardConfig(difficulty) {
  return BoardConfig[difficulty];
}

export default GameDifficulty;
