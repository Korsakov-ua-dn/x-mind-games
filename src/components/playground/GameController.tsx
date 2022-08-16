import { useEffect, useRef, useState } from "react";
import { win, lose } from "../../store/minesweeper/minesweeper-slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { stringFromArray } from "../../utils/stringFromArray";
import { useTick } from "../../utils/useTick";
import Timer from "../timer/Timer";
import Playground from "./Playground";

const GameController = () => {
    const dispatch = useAppDispatch();
    const activeCeilsList = useAppSelector(s => s.minesweeper.activeCeilsList);
    const correctAnswerList = useAppSelector(s => s.minesweeper.correctAnswerList);
    let delay = useAppSelector(s => s.minesweeper.gameParams.delay); // задержка до взрыва в минутах

    // const clearTick = useTick();

    const endTime = useRef(new Date().getTime() + delay*1000*60) // конвертирую минуты в ms

    const [minutes, setMinutes] = useState(Math.floor(delay));
    const [seconds, setSeconds] = useState(Math.floor(delay*60 % 60)); // получаю остаток от деления

    useEffect(() => {
        const lessTime = endTime.current - new Date().getTime() // количество ms до взрыва
        const minutes = Math.floor( lessTime/1000/60 );
        const seconds = Math.floor( lessTime/1000 % 60 );

        // победа если оба массива с номерами ячеек равны
        if (stringFromArray(correctAnswerList) === stringFromArray(activeCeilsList)) {
            dispatch(win())
        } else {
            if (minutes === 0 && seconds === 0) 
            //clearTick()
            // если время вышло диспатчим проиграл иначе сетаем время которое осталось
            if (minutes + seconds < 0) dispatch(lose()) // "0" показываем на табло

            else setTimeout(() => {
                setMinutes(minutes)
                setSeconds(seconds)
            }, 1000)

        }

    }, [correctAnswerList, activeCeilsList, minutes, seconds, dispatch])

    return (
        <>
            <Timer minutes={minutes} seconds={seconds}/>
            <Playground/>
        </>
    )
}

export default GameController