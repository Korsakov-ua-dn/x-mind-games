import React, { MouseEvent, useCallback }  from "react";
import { toggleActiveCeil } from "../../store/minesweeper/minesweeper-slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Playground from "../../components/mw-playground/Playground"
import Ceil from "../../components/mw-playground/Ceil";

const PlaygroundContainer = () => {
    const dispatch = useAppDispatch();
    const aspectRatio = useAppSelector(s => s.minesweeper.gameParams.aspectRatio);
    const listOfSteps = useAppSelector(s => s.minesweeper.listOfSteps);
    const activeCeilsList = useAppSelector(s => s.minesweeper.activeCeilsList);

// вещаем один обработчик для всех ячеек
    const clickCeilHandler = useCallback((e: MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLElement).tagName === 'STRONG') {

            let id = Number((e.target as HTMLElement).id)
            dispatch(toggleActiveCeil(id));
        }
    }, [dispatch])

    return (
        <Playground
            aspectRatio={aspectRatio}
            clickCeilHandler={clickCeilHandler}>
        
            {  
                listOfSteps.map(number => <Ceil 
                    number={number}
                    active={!!activeCeilsList.find(id => id === number)}
                    key={number}/>)
            }
            
        </Playground>
    )
}

export default React.memo(PlaygroundContainer);