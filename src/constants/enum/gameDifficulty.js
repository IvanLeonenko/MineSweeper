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

export default GameDifficulty;
