import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Player = (props) => {
    const {image, name, salary} = props.player;
    const imageStyle = {height:'300px', width:'300px'}
    const playerCardStyle = {border: '5px solid black', margin:'10px', padding:'10px'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
    <div className="playerDiv">
        <div style={playerCardStyle}>
            <img style={imageStyle} src={image} alt=""/>
            <h4>{name}</h4>
            <p>Salary: {salary}</p>
            <button className="btn btn-success" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} /> Add Player to Squad</button>
        </div>
    </div>
    );
};

export default Player;