import React from "react";
import PropTypes from "prop-types";
import "./Game.scss";
import MineBoard from "../mineBoard/MineBoard";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
        <MineBoard />
    </div>;
  }
}
