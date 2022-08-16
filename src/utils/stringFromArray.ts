export const stringFromArray = (array: number[]) => {
    return JSON.stringify(array.sort())
}