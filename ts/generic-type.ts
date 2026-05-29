function getRandomItem<T>(items: T[]): T | undefined {
    if (items.length === 0) return undefined;
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

const it: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getRandomItem(it));

const lucky: string[] = ["good luck next time!", "you got a hug!", "good luck next time!", "you got a pen!", "good luck next time!"];
console.log(getRandomItem(lucky));