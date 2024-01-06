
export type DisplayProps = {
    isReset: boolean,
    setIsReset: React.Dispatch<React.SetStateAction<boolean>>,
    currentScore: number;
    highestScore: number;

}

export type PokemonData = {
    id: number,
    name: string,
    imageUrl: string,
}

export type CardsProps = {
    pokemonDataList: PokemonData[],
    currentScore: number;
    highestScore: number;
    setHighestScore: React.Dispatch<React.SetStateAction<number>>,
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>,
}

export type PokemonCardProps = {
    pokemonData: PokemonData;
    currentScore: number;
    highestScore: number;
    setHighestScore: React.Dispatch<React.SetStateAction<number>>,
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>,
}
