export const stringFromArray = (array: number[]) => {
    const temp = [...array]
    return JSON.stringify(temp.sort())
}