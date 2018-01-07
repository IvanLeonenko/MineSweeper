import React from 'react';
import PropTypes from 'prop-types';
import './Cell.scss';
import explosion from 'assets/img/explosion.svg';
import bomb from 'assets/img/bomb.svg';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        
        this.getMineCount = (cell) => {
            return cell.mineCount && cell.mineCount > 0 ? cell.mineCount : 0;
        };
    }
    
    render() {
        const { cell, onClick } = this.props;
        
        return <div
            className={"flex-item cell"
                + (cell.cleared ? " flat" : " bump")
                + (" number" + this.getMineCount(cell))}
            onClick={!cell.cleared && (() => onClick(cell))}>
            { <img className={(cell.cleared && cell.mine ? "" : " hidden")} src={cell.clicked ? explosion : bomb} /> }
            { this.getMineCount(cell) }
        </div>;
    }
}

Cell.propTypes = {
    cell: PropTypes.object.isRequired,
    onClick: PropTypes.func
};
