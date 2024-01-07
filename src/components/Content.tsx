import { useEffect, useState } from "react";
import Cards from "./Cards";
import Display from "./Display";
import { PokemonData } from "./Types";
import { getUniqueListRandomInteger } from "./Utils";
import { fetchMultiplePokemons } from "./fetchData";

const MIN_POKEMON_ID: number = 1;
const MAX_POKEMON_ID: number = 1010;
const DIFFICULTY : { [key: string] : number} = {
    easy : 8,
    medium : 12,
    hard: 16
}

export default function Content() {

    const [isReset, setIsReset] = useState<boolean>(false);
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [highestScore, setHighestScore] = useState<number>(0);
    const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [difficultyLevel, setDifficultyLevel] = useState<string>("easy");

    const numberOfCards: number = DIFFICULTY[difficultyLevel];

    console.log("Current score: ", currentScore);

    const toggleReset = () => {
        setIsReset(!isReset);
    }

    // if difficulty level changed, reset the game!
    useEffect( () => {
        toggleReset();
    }, [difficultyLevel])

    // fetch data at first render and everytime reset button is clicked
    useEffect(() => {
        console.log("Start fetching")
        setIsFetching(true);
    }, [isReset])

    // also set the current score to 0
    useEffect(() => {
        setCurrentScore(0);
    }, [isReset])

    // fetching
    useEffect(() => {
        if (isFetching) {
            console.log("Fetching ......")
            const randomPokemonIdList: number[] = getUniqueListRandomInteger(MIN_POKEMON_ID, MAX_POKEMON_ID, numberOfCards);
            const newPokemonsDataPromise: Promise<PokemonData[]> = fetchMultiplePokemons(randomPokemonIdList);
            newPokemonsDataPromise
                .then((newPokemonsData) => setPokemonsData(newPokemonsData))
        }
        else {
            console.log("Skip Fetching ")
        }
    }, [isFetching])

    // after fecthing is finished, set isFecthing to `false` to render data
    useEffect(() => {
        console.log("Finish Fetching")
        setIsFetching(false);
    }, [pokemonsData])

    // every re-render, calculate highest score
    if (currentScore > highestScore) {
        setHighestScore(currentScore);
    }

    return (
        <div className="content">
            <Display
                currentScore={currentScore}
                highestScore={highestScore}
                difficultyLevel={difficultyLevel}
                setDifficultyLevel={setDifficultyLevel}
            />

            {/* if data is loading, then show this message */}
            {isFetching && (
                <p className="loading-message"> Loading data.. </p>
            )}

            {/* else if data is finished loading , then return elements displaying those data */}
            {!isFetching && (
                <Cards
                    pokemonDataList={pokemonsData}
                    currentScore={currentScore}
                    setCurrentScore={setCurrentScore}
                    toggleReset={toggleReset}
                />
            )}
        </div>
    );
}

