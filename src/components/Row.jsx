import React from 'react';
import PropTypes from 'prop-types';
import 'assets/scss/MineSweeper.scss';
import Cell from './Cell';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return <div className="flex-container">
            { this.props.cells.map(c => <Cell {...c} />) }
        </div>;
    }
}

Row.propTypes = {
    cells: PropTypes.array
};
