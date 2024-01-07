import { useEffect, useState } from "react";
import Cards from "./Cards";
import Display from "./Display";
import { PokemonData } from "./Types";
import { getUniqueListRandomInteger } from "./Utils";

const MIN_POKEMON_ID = 1;
const MAX_POKEMON_ID = 1010;
const NUMBER_OF_CARD = 12;

export default function Content() {

    const [isReset, setIsReset] = useState<boolean>(false);
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [highestScore, setHighestScore] = useState<number>(0);
    const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    console.log("Current score: ", currentScore);

    const toggleReset = () => {
        setIsReset(!isReset);
    }

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
            const randomPokemonIdList: number[] = getUniqueListRandomInteger(MIN_POKEMON_ID, MAX_POKEMON_ID, NUMBER_OF_CARD);
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
                toggleReset={toggleReset}
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

async function fetchPokemonById(pokemonId: number): Promise<PokemonData> {
    const BASE_URL: string = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonUrl: string = BASE_URL + pokemonId;

    const response = await fetch(pokemonUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch pokemon")
    }
    const pokemon = await response.json();

    let imageUrl = pokemon.sprites.other.showdown.front_default;

    if (imageUrl == null) {
        imageUrl = pokemon.sprites.other['official-artwork'].front_default;
    }

    return {
        id: pokemon.id,
        name: pokemon.name,
        imageUrl: imageUrl
    }
}

async function fetchMultiplePokemons(pokemonIdList: number[]): Promise<PokemonData[]> {
    const pokemonsData: PokemonData[] = await Promise.all(
        pokemonIdList.map(async (id: number) => fetchPokemonById(id))
    );

    return pokemonsData;
}


