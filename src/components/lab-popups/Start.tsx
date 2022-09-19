import React, { MouseEvent }  from "react";
import LayoutStartPopup from "../common/LayoutStartPopup";

type PropsType = {
    aspectRatio: number,
    fieldSelectionHandler: (e: MouseEvent<HTMLElement>) => void,
    pressStartHandler: () => void,
}

const Start:React.FC<PropsType> = ({
    aspectRatio,
    fieldSelectionHandler,
    pressStartHandler,
}) => {

    return (
        <LayoutStartPopup>
            <p className='start__description'>
                <i className="start__title">Игра "ЛАБИРИНТ".</i>
                <i>Двигайся в лабиринте по стрелкам. Количество ходов - 10</i>
            </p>
            
            <div className='list'>
                <div data-level={3} onClick={fieldSelectionHandler} className='list__item'>
                    <input checked={aspectRatio === 3} type="radio" value="3" name="playground-size" readOnly/>
                    <label htmlFor="date">Поле 3 х 3</label>
                </div>
                <div data-level={4} onClick={fieldSelectionHandler} className='list__item'>
                    <input checked={aspectRatio === 4} type="radio" value="4" name="playground-size" readOnly/>
                    <label htmlFor="name">Поле 4 х 4</label>
                </div>
                <div data-level={5} onClick={fieldSelectionHandler} className='list__item'>
                    <input checked={aspectRatio === 5} type="radio" value="5" name="playground-size" readOnly/>
                    <label htmlFor="amount">Поле 5 х 5</label>
                </div>
            </div>
            <button onClick={pressStartHandler} className='start__btn'>СТАРТ</button>
        </LayoutStartPopup>
    )
};

export default React.memo(Start);