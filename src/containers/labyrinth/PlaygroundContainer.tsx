import React, { MouseEvent, useRef, useCallback }  from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
// компоненты
import Playground from "../../components/lab-playground/Playground";
import Ceil from "../../components/lab-playground/Ceil";
import { labyrinthActions } from "../../store/labyrinth/labyrinth-slice";

const PlaygroundContainer = () => {
    const dispatch = useAppDispatch();
    const aspectRatio = useAppSelector(s => s.labyrinth.aspectRatio);
    const correctAnswer = useAppSelector(s => s.labyrinth.correctAnswer);
    const startNumber = useAppSelector(s => s.labyrinth.startNumber);
    const showAnswer = useAppSelector(s => s.labyrinth.showAnswer);
    const disable = useAppSelector(s => s.labyrinth.disable);

    // ref для ячейки-ответа игрока
    const userAnswerRef = useRef<any>();

    const callbacks = {
        // вещаем один обработчик для всех ячеек на всю таблицу
        clickCeilHandler: useCallback((e: MouseEvent<HTMLElement>) => {
        
            if ((e.target as HTMLElement).tagName === 'SPAN') {
    
                userAnswerRef.current = e.target
                let id = Number((e.target as HTMLElement).id)
                dispatch(labyrinthActions.checkAnswer(id, userAnswerRef.current))
               
            }

        }, [dispatch]),
        // генерируем массив ячеек для игрового поля
        getCeils: useCallback(() => {
            let ceils = [];
            for (let i = 1; i <= Math.pow(aspectRatio, 2); i++) {
                ceils.push(<Ceil win={ showAnswer && correctAnswer === i} start={i === startNumber} i={i} key={i}/>);     
            }
            return ceils;
        }, [aspectRatio, correctAnswer, showAnswer, startNumber])
    };

    return (
        <Playground 
            aspectRatio={aspectRatio} 
            clickCeilHandler={callbacks.clickCeilHandler} 
            disable={disable}>
        
            { callbacks.getCeils() }
            
        </Playground>
    )
}

export default React.memo(PlaygroundContainer);