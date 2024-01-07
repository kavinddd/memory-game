
export type DisplayProps = {
    currentScore: number,
    highestScore: number,
    difficultyLevel: string,
    setDifficultyLevel: React.Dispatch<React.SetStateAction<string>>

}

export type PokemonData = {
    id: number,
    name: string,
    imageUrl: string,
}

export type CardsProps = {
    pokemonDataList: PokemonData[],
    currentScore: number,
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>,
    toggleReset: () => void;
}

export type PokemonCardProps = {
    pokemonData: PokemonData,
    incrementScore: () => void,
    toggleReset: () => void,
}
