import { useState } from "react";
import { DisplayProps } from "./Types";


export default function Display( {isReset, setIsReset, currentScore, highestScore}: DisplayProps ) {

    const handleRestart = () => {
        setIsReset(!isReset);
    }

    return (

        <div className="display">

            <div className="display-score">
                <span className="current-score"> Score: {currentScore} </span>
                <span className="highest-score"> Highest Score: {highestScore} </span>
                <button onClick={handleRestart}> Restart </button>
            </div>

            <div className="guide-information">
                <p> How to play? </p>
                <p> Keep clicking on the pokemon that you haven't clicked before </p>
            </div>

        </div>
    )
}