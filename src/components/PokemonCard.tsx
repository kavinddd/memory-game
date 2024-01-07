import { useEffect, useState } from "react"
import { PokemonCardProps } from "./Types"


export default function PokemonCard({ pokemonData,  incrementScore, toggleReset}: PokemonCardProps) {


    const [isClicked, setIsClicked] = useState<boolean>(false);

    const clickHandler = () => {
        // if clicked again
        if (isClicked) {
            // setIsReset, state changed
           toggleReset();
        }
        // first time click, set true
        setIsClicked(true)
    }


    // re-render with isCliked 1st time, get the score
    useEffect(() => {
        if (isClicked) {
            incrementScore();
        }
    }, [isClicked])

    return (
        <div 
            className="pokemon-card"
            onClick={clickHandler}>
            <img src={pokemonData.imageUrl} alt={pokemonData.name} />
        </div>
    )
}