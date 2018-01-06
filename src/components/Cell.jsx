import React from 'react';
import PropTypes from 'prop-types';
import 'assets/scss/MineSweeper.scss';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        //console.log('render',this.props);
        const { cell, onClick } = this.props;

        return <div
            className={"flex-item cell " + (cell.cleared ? "dent" : "bump")}
            onClick={!cell.cleared && (() => onClick(cell))}>
        </div>;
    }
}

Cell.propTypes = {
    cell: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
