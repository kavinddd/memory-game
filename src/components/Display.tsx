import { useState } from "react";
import { DisplayProps } from "./Types";
import "../styles/display.css"


export default function Display({ toggleReset, currentScore, highestScore, difficultyLevel, setDifficultyLevel }: DisplayProps) {

    const clickHandle = () => {
        toggleReset();
    }

    const generateDifficultyButtons = () => {
        const allDifficulties: string[] = ["easy", "medium", "hard"];
        const buttons = allDifficulties.map((difficulty) => {
            return (
                <button className={difficulty === difficultyLevel ? "selected" : ""} >
                    {difficulty}
                </button>
            )
        })
        return buttons;
    }

    const selectDifficultyHandle = (e) : void => {
        const choseDifficulty = e.target.textContent

        if (choseDifficulty === difficultyLevel) {
            return;
        }

        setDifficultyLevel(choseDifficulty);
    }

    const buttons = generateDifficultyButtons();


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

            <div className="difficulty-buttons" onClick={selectDifficultyHandle}>
                {buttons}
            </div>


        </div>
    )
}