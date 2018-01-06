import React from 'react';
import PropTypes from 'prop-types';
import { Board } from '../lib/minesweeper/board'
import 'assets/scss/MineSweeper.scss';
import Row from './Row';
import Cell from './Cell';
import * as R from 'ramda';

export default class MineSweeper extends React.Component {
    constructor(props) {
        super(props);
        const board = new Board();
        this.state = {
            status : "playing",   // playing, clear, gameover
            board,
            spots: board.spots,
        };
        this.onCellClick = (cell) => {
            this.state.board.clearSpot(cell.id);
            this.setState({ spots: this.state.spots});
        };
    }

    render() {

        const rows = R.splitEvery(this.state.board.width, this.state.board.spots);
        
        return <div>
            <div>
                { R.map(r => <div className="flex-container">
                        { R.map(c => <Cell cell={c} onClick={this.onCellClick} />, r) }
                    </div>, rows)
                }
            </div>
        </div>;
    }
}
