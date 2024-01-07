
export function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getListRandomInteger(min: number, max: number, size: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < size; i++) {
        result.push(getRandomInteger(min, max));
    }

    return result;
}
export function getUniqueListRandomInteger(min: number, max: number, size: number): number[] {
    const result: number[] = [];

    while (result.length != size) {
        const randomNum: number = getRandomInteger(min, max);
        if (!result.includes(randomNum)) {
            result.push(randomNum)
        }
    }

    return result;
}

export function shuffleArray<T>(arrayInput: T[]): T[] {

    console.log(arrayInput.length);

    if (arrayInput.length == 0){
        return [];
    }

    console.log("Original Array", arrayInput);

    // copy, prevent mutable
    let array: T[] = [...arrayInput];

    console.log("Copied Array", array)

    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;

}