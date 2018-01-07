import React from "react";
import PropTypes from "prop-types";
import { Board } from "../../lib/minesweeper/board";
import "./MineBoard.scss";
import Overlay from "../overlay/Overlay";
import Cell from "../cell/Cell";
import {
  GameStatus,
  getStatusColor,
  getStatusMessage
} from "../../constants/enum/gameStatus";
import * as R from "ramda";

export default class MineBoard extends React.Component {
  constructor(props) {
    super(props);
    const board = new Board();
    this.state = {
      board,
      spots: board.spots,
      status: GameStatus.INIT
    };

    this.onCellClick = cell => {
      this.state.board.clearSpot(cell.id);
      if (this.state.board.lost) {
        this.state.board.clearAll();
      }
      const status = this.state.board.lost
        ? GameStatus.LOST
        : this.state.board.won() ? GameStatus.WON : GameStatus.PLAYING;

      if (this.props.onBoardChange && status !== this.state.status) {
        this.props.onBoardChange(status);
      }
      this.setState({ spots: this.state.spots });
    };
  }

  componentWillReceiveProps(nextProps) {
    const { status, difficulty } = nextProps;


    if (this.state.difficulty !== difficulty) {
        const board = new Board(difficulty.width, difficulty.height, difficulty.mines);
        this.setState({ board, spots: board.spots, difficulty });
    }

    if (this.state.status !== status) {
        if (this.state.status === GameStatus.WON || this.state.status === GameStatus.LOST) {
            const board = new Board(difficulty.width, difficulty.height, difficulty.mines);
            this.setState({ board, spots: board.spots });
        }
        this.setState({ status })
    }
  }

  render() {
    const { message } = this.props;
    const rows = R.splitEvery(this.state.board.width, this.state.board.spots);

    return (
      <div className="board-root">
        {message && <Overlay message={message} />}
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
  onBoardChange: PropTypes.func,
  message: PropTypes.string,
  status: PropTypes.number,
  difficulty: PropTypes.object
};
