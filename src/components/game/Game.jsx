import React from "react";
import PropTypes from "prop-types";
import "./Game.scss";
import MineBoard from "../mineBoard/MineBoard";
import Overlay from "../overlay/Overlay";
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
      const status =
        this.state.gameStatus !== GameStatus.PLAYING
          ? GameStatus.PLAYING
          : GameStatus.INIT;
      this.setState({ gameStatus: status });
    };

    this.onBoardChange = statusUpdate => {
      const status = statusUpdate.lost
      ? GameStatus.LOST
      : statusUpdate.won ? GameStatus.WON : GameStatus.PLAYING;
      this.setState({ gameStatus: status });
    };

    this.isPlaying = () => this.state.gameStatus === GameStatus.PLAYING;

    this.buttonText = () =>
      this.state.gameStatus === GameStatus.PLAYING ? "STOP" : "START";
  }

  render() {
    const message = getStatusMessage(this.state.gameStatus);
    return <div>
        <div className="container">
          <div className="row">
            {!this.isPlaying() ? R.map(difficulty => <div className="col-xs-4 col-sm-4 col-md-4 content-center">
                    <div className="radio">
                      <label className="text-column">
                        <input type="radio" value={GameDifficulty[difficulty]} checked={this.state.selectedDifficulty === GameDifficulty[difficulty]} onChange={this.handleDifficultyChange} />
                        {getGameDifficultyName(GameDifficulty[difficulty])}
                      </label>
                    </div>
                  </div>, Object.keys(GameDifficulty)) : <div>
                <div className="col-xs-6 col-sm-6 col-md-6 text-column content-center">
                  <p>
                    {getGameDifficultyName(this.state.selectedDifficulty)}
                  </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 text-column content-center">
                  <button className="btn btn-default red-button" type="submit" onClick={this.startGame}>
                    {this.buttonText()}
                  </button>
                </div>
              </div>}
          </div>
        </div>
        <div className={"board-root"}>
          {message && <Overlay message={message}>
              <button className="btn btn-default red-button" type="submit" onClick={this.startGame}>
                {this.buttonText()}
              </button>
            </Overlay>}
          <MineBoard onBoardChange={this.onBoardChange} status={this.state.gameStatus} difficulty={getDifficultyBoardConfig(this.state.selectedDifficulty)} />
        </div>
      </div>;
  }
}
