import React from 'react';
import PropTypes from 'prop-types';
import './Cell.scss';
import explosion from 'assets/img/explosion.svg';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        //console.log('render',this.props);
        const { cell, onClick } = this.props;
// 
        return <div
            className={"flex-item cell"
                + (cell.cleared ? " flat" : " bump")
                + (" number" + (cell.mineCount && cell.mineCount > 0 ? cell.mineCount : 0))}
            onClick={!cell.cleared && (() => onClick(cell))}>
            {
                cell.cleared && cell.mine
                ? <img className="content" src={explosion} /> : <img className="content hidden" src={explosion} />
            }
            {
                cell.mineCount && cell.mineCount > 0 ? cell.mineCount : 0
            }
        </div>;
    }
}

Cell.propTypes = {
    cell: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
