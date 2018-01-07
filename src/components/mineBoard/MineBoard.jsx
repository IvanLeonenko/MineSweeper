import React from "react";
import PropTypes from "prop-types";
import { Board } from "../../lib/minesweeper/board";
import "./MineBoard.scss";
import Cell from "../cell/Cell";
import { GameStatus } from "../../constants/enum/gameStatus";
import * as R from "ramda";

export default class MineBoard extends React.Component {
  constructor(props) {
    super(props);
    const board = new Board();
    this.state = {
      board,
      spots: board.spots
    };

    this.onCellClick = cell => {
      cell.clicked = true;
      this.state.board.clearSpot(cell.id);
      const lost = this.state.board.lost;
      const won = !this.state.board.lost && this.state.board.won();
      
      if (lost || won) {
        this.state.board.clearAll();
      }

      if (this.props.onBoardChange && status !== this.state.status) {
        this.props.onBoardChange({ lost: this.state.board.lost, won });
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
      if (this.state.status !== GameStatus.PLAYING) {
        const board = new Board(difficulty.width, difficulty.height, difficulty.mines);
        this.setState({ board, spots: board.spots });
      }
      this.setState({ status });
    }
  }

  render() {
    const { message, className } = this.props;
    const rows = R.splitEvery(this.state.board.width, this.state.board.spots);

    return <div>
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
      </div>;
  }
}

MineBoard.propTypes = {
  onBoardChange: PropTypes.func,
  status: PropTypes.number,
  difficulty: PropTypes.object
};
