import { MouseEventHandler, useState } from "react"
import { CardsProps , PokemonData} from "./Types"
import { shuffleArray } from "./Utils"
import PokemonCard from "./PokemonCard"

export default function Cards( {pokemonDataList, currentScore, setCurrentScore, toggleReset} : CardsProps ) {

    // shuffle every re-render
    const shuffledData: PokemonData[] = shuffleArray(pokemonDataList);

    const incrementScore = () : void => {
        setCurrentScore(currentScore+1);
    }

    const pokemonCards: JSX.Element[] = shuffledData.map( (data: PokemonData) => {
        return <PokemonCard
                key={data.id}
                pokemonData={data}
                incrementScore={incrementScore}
                toggleReset={toggleReset}
                />
    })

    return  (
        <div className="cards">
            {pokemonCards}
        </div>
    )
}