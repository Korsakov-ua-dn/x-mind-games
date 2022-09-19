import React, { useEffect, useState }  from "react";
import { setDisable } from "../../store/labyrinth/labyrinth-slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
// компоненты
import Ceil from "../../components/lab-moves/Ceil";
import Moves from "../../components/lab-moves/Moves";

const MoveContainer = () => {
    const dispatch = useAppDispatch();
    const startNumber = useAppSelector(s => s.labyrinth.startNumber);
    const listOfMoves = useAppSelector(s => s.labyrinth.listOfMoves);
    const aspectRatio = useAppSelector(s => s.labyrinth.aspectRatio);

    // показываем стрелку направления движения каждую секунду
    const [show, setShow] = useState(-2);
    useEffect(() => {
        if (show === 10) {
            dispatch(setDisable(false))
            return;
        }
        setTimeout(() => setShow(show + 1), 1000)
    }, [show, dispatch]);

    // генерируем массив ячеек для отрисовки
    const getMoves = () => {
        let moves = [];
        let currentCeilNum = startNumber || 0

        for (let i = 0; i < 10; i++) {
            const movement =  listOfMoves[i] - currentCeilNum
            currentCeilNum = listOfMoves[i]
            moves.push(<Ceil movement={movement} 
                            show={show}
                            i={i}
                            key={i}/>);
        }

        return moves;
    };

    return (
        <Moves aspectRatio={aspectRatio} className="moves">
        
            { getMoves() }
            
        </Moves>
    )
}

export default React.memo(MoveContainer);