import React from "react";
import PropTypes from "prop-types";
import "./Game.scss";
import MineBoard from "../mineBoard/MineBoard";
import {
  GameDifficulty,
  getGameDifficultyName,
  getDifficultyBoardConfig
} from "../../constants/enum/gameDifficulty";
import { GameStatus, getStatusMessage } from "../../constants/enum/gameStatus";
import * as R from "ramda";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDifficulty: GameDifficulty.EASY,
      gameStatus: GameStatus.INIT
    };

    this.handleDifficultyChange = changeEvent => {
      this.setState({
        selectedDifficulty: parseInt(changeEvent.target.value)
      });
    };

    this.startGame = () => {
        const status = this.state.gameStatus !== GameStatus.PLAYING ? GameStatus.PLAYING : GameStatus.INIT;
      this.setState({ gameStatus: status });
    };

    this.onBoardChange = status => {
      this.setState({ gameStatus: status });
    };

    this.isPlaying = () => this.state.gameStatus === GameStatus.PLAYING;

    this.buttonText = () => this.state.gameStatus === GameStatus.PLAYING ? "Stop" : "Start";
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
                {this.buttonText()}
              </button>
            </div>
            {!this.isPlaying() ? (
              R.map(
                difficulty => (
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={GameDifficulty[difficulty]}
                          checked={
                            this.state.selectedDifficulty ===
                            GameDifficulty[difficulty]
                          }
                          onChange={this.handleDifficultyChange}
                        />
                        {getGameDifficultyName(GameDifficulty[difficulty])}
                      </label>
                    </div>
                  </div>
                ),
                Object.keys(GameDifficulty)
              )
            ) : (
              <div className="col-xs-3 col-sm-3 col-md-3 text-column">
                <p>
                  Difficulty: {getGameDifficultyName(this.state.selectedDifficulty)}
                </p>
              </div>
            )}
          </div>
        </div>
        <MineBoard
          onBoardChange={this.onBoardChange}
          status={this.state.gameStatus}
          message={getStatusMessage(this.state.gameStatus)}
          difficulty={getDifficultyBoardConfig(this.state.selectedDifficulty)}
        />
      </div>
    );
  }
}
