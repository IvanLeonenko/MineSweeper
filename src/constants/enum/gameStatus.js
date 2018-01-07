/**
 * Game status enum
 * @enum
 * @type {object}
 */
export const GameStatus = {
  INIT: 1,
  PLAYING: 2,
  WON: 3,
  LOST: 4
};

const StatusColor = {
  [GameStatus.INIT]: "#f2cd67",
  [GameStatus.PLAYING]: "#f2cd67",
  [GameStatus.WON]: "#6fd9ba",
  [GameStatus.LOST]: "#ff877e"
};

/**
 * Get satus message
 * @param {status} status
 * @returns {string}
 */
export function getStatusMessage(status) {
  switch (status) {
    case GameStatus.INIT:
    return "PRESS START!";
    case GameStatus.WON:
      return "CONGRATULATIONS!";
    case GameStatus.LOST:
      return "GAME OVER!";
    default:
      return "";
  }
}

/**
 * Get status color
 * @param {status} status
 * @returns {string}
 */
export function getStatusColor(status) {
  return StatusColor[status];
}

export default GameStatus;
