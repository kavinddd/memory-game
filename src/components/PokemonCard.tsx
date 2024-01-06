import { useState } from "react"
import { PokemonCardProps } from "./Types"


export default function PokemonCard( {pokemonData, currentScore, highestScore, setHighestScore, setCurrentScore}: PokemonCardProps ) {

    console.log("Pokemon card is called")

    const [isClicked, setIsClicked] = useState(false)

    console.log(pokemonData);

    return (
        <div key={pokemonData.id} className="pokemon-card">
            <img src={pokemonData.imageUrl} alt={pokemonData.name} />
            <p className="pokemon-name">{pokemonData.name}</p>
        </div>
    )
}