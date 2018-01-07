import React from "react";
import PropTypes from "prop-types";
import { Board } from "../../lib/minesweeper/board";
import "./MineBoard.scss";
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
      this.setState({ spots: this.state.spots, status });
    };
  }

  render() {
    const rows = R.splitEvery(this.state.board.width, this.state.board.spots);

    return (
      <div>
        <div>Game over!</div>
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
