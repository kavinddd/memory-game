import { PokemonData } from "./Types";

async function fetchPokemonById(pokemonId: number): Promise<PokemonData> {
    const BASE_URL: string = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonUrl: string = BASE_URL + pokemonId;

    const response: Response = await fetch(pokemonUrl);
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

export async function fetchMultiplePokemons(pokemonIdList: number[]): Promise<PokemonData[]> {
    const pokemonsData: PokemonData[] = await Promise.all(
        pokemonIdList.map(async (id: number) => fetchPokemonById(id))
    );

    return pokemonsData;
}

