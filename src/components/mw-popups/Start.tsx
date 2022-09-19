import React, { MouseEvent }  from "react";
import { levelType } from "../../store/minesweeper/minesweeper-slice";
import LayoutStartPopup from "../common/LayoutStartPopup";

type PropsType = {
    level: levelType,
    fieldSelectionHandler: (e: MouseEvent<HTMLElement>) => void,
    pressStartHandler: () => void,
}

const Start:React.FC<PropsType> = ({
    level,
    fieldSelectionHandler,
    pressStartHandler,
}) => {

    return (
            <LayoutStartPopup>
                <p className='start__description'>
                    <i className="start__title">Игра "САПЕР".</i>
                    <i>Тебе предстоит разминировать 8 минных полей.</i>
                    <i>Для этого необходимо указать все числа не кратные номеру мины.</i>
                </p>
                <div className='list'>
                    <div data-level="easy" onClick={fieldSelectionHandler} className='list__item'>
                        <input type="radio" name="settings" checked={level === 'easy'} readOnly />
                        <label htmlFor="date">Ребенок</label>
                    </div>
                    <div data-level="medium" onClick={fieldSelectionHandler} className='list__item'>
                        <input type="radio" name="settings" checked={level === 'medium'} readOnly />
                        <label htmlFor="name">Подросток</label>
                    </div>
                    <div data-level="hard" onClick={fieldSelectionHandler} className='list__item'>
                        <input type="radio" name="settings" checked={level === 'hard'} readOnly />
                        <label htmlFor="amount">Студент</label>
                    </div>
                    <div data-level="extra hard" onClick={fieldSelectionHandler} className='list__item'>
                        <input type="radio" name="settings" checked={level === 'extra hard'} readOnly />
                        <label htmlFor="amount">Взрослый</label>
                    </div>
                </div>
                <button onClick={pressStartHandler} className='start__btn'>СТАРТ</button>
            </LayoutStartPopup>
    )
};

export default React.memo(Start);