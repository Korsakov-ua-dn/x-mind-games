export const getCorrectAnswerList = (listOfSteps: number[], bid: number) => {
    return listOfSteps.filter(number => number % bid)
}