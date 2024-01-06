import { useEffect, useState } from "react";
import Cards from "./Cards";
import Display from "./Display";
import { DisplayProps, PokemonData } from "./Types";
import { getListRandomInteger } from "./Utils";

const MIN_POKEMON_ID = 1;
const MAX_POKEMON_ID = 1010;
const NUMBER_OF_CARD = 12;

export default function Content() {

    const [isReset, setIsReset] = useState<boolean>(false);
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [highestScore, setHighestScore] = useState<number>(0);
    const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);


    // fetch pokemon data
    useEffect(() => {
        const randomPokemonIdList: number[] = getListRandomInteger(MIN_POKEMON_ID, MAX_POKEMON_ID, NUMBER_OF_CARD);
        const newPokemonsData: PokemonData[] = fetchMultiplePokemons(randomPokemonIdList);
        setPokemonsData(newPokemonsData)
    }, [isReset])


    return (
        <div className="content">
            <Display
                isReset={isReset}
                setIsReset={setIsReset}
                currentScore={currentScore}
                highestScore={highestScore} />
            <Cards
                pokemonDataList={pokemonsData}
                currentScore={currentScore}
                highestScore={highestScore}
                setCurrentScore={setCurrentScore}
                setHighestScore={setHighestScore}
            />

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

    return {
        id: pokemon.id,
        name: pokemon.name,
        imageUrl: pokemon.sprites.other.showdown.front_default,
    }
}

function fetchMultiplePokemons(pokemonIdList: number[]): PokemonData[] {
    const pokemonsData: PokemonData[] = [];
    pokemonIdList.forEach(async (id) => {
        const data = await fetchPokemonById(id);
        pokemonsData.push(data);
    })

    return pokemonsData;
}


