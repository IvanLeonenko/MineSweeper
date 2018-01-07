/**
 * Board status enum
 * @enum
 * @type {object}
 */
export const BoardStatus = {
  INIT: 1,
  WON: 2,
  LOST: 3
};

const StatusColor = {
  [BoardStatus.INIT]: "#f2cd67",
  [BoardStatus.WON]: "#6fd9ba",
  [BoardStatus.LOST]: "#ff877e"
};

/**
 * Get satus message
 * @param {status} status
 * @returns {string}
 */
export function getStatusMessage(status) {
  switch (status) {
    case BoardStatus.WON:
      return "CONGRATULATIONS!";
    case BoardStatus.LOST:
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

export default BoardStatus;
