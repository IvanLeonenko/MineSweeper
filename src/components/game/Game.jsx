import React from "react";
import PropTypes from "prop-types";
import MineBoard from "../mineBoard/MineBoard";
import {
  GameDifficulty,
  getGameDifficultyName
} from "../../constants/enum/gameDifficulty";
import { BoardStatus } from "../../constants/enum/boardStatus";
import * as R from "ramda";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedDifficulty: GameDifficulty.EASY };

    this.onBoardStatusChange = status => {};

    this.handleDifficultyChange = changeEvent => {
      this.setState({
        selectedDifficulty: parseInt(changeEvent.target.value)
      });
    };

    this.startGame = () => {
      // props to mine board
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3">
              <button
                className="btn btn-default"
                type="submit"
                onClick={this.startGame}
              >
                Start
              </button>
            </div>
            {R.map(
              difficulty => (
                <div className="col-xs-3 col-sm-3 col-md-3">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value={GameDifficulty[difficulty]}
                        checked={ this.state.selectedDifficulty === GameDifficulty[difficulty] }
                        onChange={this.handleDifficultyChange}
                      />
                      {getGameDifficultyName(GameDifficulty[difficulty])}
                    </label>
                  </div>
                </div>
              ),
              Object.keys(GameDifficulty)
            )}
          </div>
        </div>
        <MineBoard onBoardStatusChange={this.onBoardStatusChange} />
      </div>
    );
  }
}
