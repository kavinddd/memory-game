import { MouseEventHandler, useState } from "react"
import { CardsProps , PokemonData} from "./Types"
import { shuffleArray } from "./Utils"
import PokemonCard from "./PokemonCard"

export default function Cards( {pokemonDataList, currentScore, highestScore, setCurrentScore, setHighestScore} : CardsProps ) {

    // Problem is here, the first render, empty list is passed as a pokemonDataList
    // so the shuffledData list will be empty, until we have some trigger
    const [shuffledData, setShuffledData]  = useState(pokemonDataList);

    


    
    console.log("Original: ", pokemonDataList)

    console.log("Shuffled: ", shuffledData);

    // click = swap data = re-render
    // const handleClick = () => {
    //     const shuffledArray = shuffleArray<PokemonData>(pokemonDataList);
    //     setShuffledData(shuffledArray);
    // }


    const pokemonCards = shuffledData.map( (data) => {

        console.log(data);
        return <PokemonCard
                pokemonData={data}
                currentScore={currentScore}
                highestScore={highestScore}
                setHighestScore={setHighestScore}
                setCurrentScore={setCurrentScore}
                />
    })



    return  (
        <div className="cards">
            {pokemonCards}
        </div>
    )
}