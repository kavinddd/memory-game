
export type DisplayProps = {
    toggleReset: () => void,
    currentScore: number,
    highestScore: number,

}

export type PokemonData = {
    id: number,
    name: string,
    imageUrl: string,
}

export type CardsProps = {
    pokemonDataList: PokemonData[],
    currentScore: number;
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>,
    toggleReset: () => void;
}

export type PokemonCardProps = {
    pokemonData: PokemonData,
    incrementScore: () => void;
    toggleReset: () => void;
}
