import { useState } from "react";
import { DisplayProps } from "./Types";
import "../styles/display.css"


export default function Display( {toggleReset , currentScore, highestScore}: DisplayProps ) {

    const clickHandle = () => {
        toggleReset();
    }

    return (

        <div className="display">

            <div className="guide-information">
                <p className="guide-header"> How to play? </p>
                <p className="guide-description"> Keep clicking on the pokemon that you haven't clicked before </p>
            </div>

            <div className="display-score">
                <span className="current-score"> Score: {currentScore} </span>
                <span className="highest-score"> Highest Score: {highestScore} </span>
            </div>

            <div className="difficulty-buttons">
                <button value="easy" > Easy </button>
                <button value="medium"> Medium</button>
                <button value="hard"> Hard</button>
            </div>


        </div>
    )
}