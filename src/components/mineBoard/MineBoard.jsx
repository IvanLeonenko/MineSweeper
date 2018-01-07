import React from "react";
import PropTypes from "prop-types";
import { Board } from "../../lib/minesweeper/board";
import "./MineBoard.scss";
import Overlay from "../overlay/Overlay";
import Cell from "../cell/Cell";
import {
  BoardStatus,
  getStatusColor,
  getStatusMessage
} from "../../constants/enum/boardStatus";
import * as R from "ramda";

export default class MineBoard extends React.Component {
  constructor(props) {
    super(props);
    const board = new Board();
    this.state = {
      board,
      spots: board.spots,
      status: BoardStatus.INIT
    };

    this.onCellClick = cell => {
      this.state.board.clearSpot(cell.id);
      const status = this.state.board.lost
        ? BoardStatus.LOST
        : this.state.board.won() ? BoardStatus.WON : BoardStatus.INIT;

      if (this.props.onBoardStatusChange && status !== this.state.status) {
        this.props.onBoardStatusChange(status);
      }
      this.setState({ spots: this.state.spots, status });
    };
  }

  showOverlay(status) {
    return status === BoardStatus.WON || status === BoardStatus.LOST;
  }

  render() {
    const rows = R.splitEvery(this.state.board.width, this.state.board.spots);

    return (
      <div className="board-root">
        {this.showOverlay(this.state.status) && (
          <Overlay message={getStatusMessage(this.state.status)} />
        )}
        <div>
          {R.map(
            row => (
              <div className="flex-container">
                {R.map(
                  cell => <Cell cell={cell} onClick={this.onCellClick} />,
                  row
                )}
              </div>
            ),
            rows
          )}
        </div>
      </div>
    );
  }
}

MineBoard.propTypes = {
  onBoardStatusChange: PropTypes.func
};
