import React, { MouseEvent }  from "react";
import styled from "styled-components";
import { minesweeperActions, setLevel } from "../../store/minesweeper/minesweeper-slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { variables } from "../../utils/variables";
import Popup from "../common/Popup";

const StartGame = () => {
    const dispatch = useAppDispatch();
    const level = useAppSelector(s => s.minesweeper.level);

    const fieldSelectionHandler = (e: MouseEvent<HTMLElement>) => {
        dispatch(setLevel(e.currentTarget.getAttribute("data-level")))
    }

    return (
        <Popup>
            <StyledContent className="start">
                <p className='start__description'>
                    <i className="start__title">Игра "САПЕР".</i>
                    <i>Тебе предстоит разминировать 8 минных полей.</i>
                    <i>Для этого необходимо указать все числа не кратные номеру мины.</i>
                </p>
                <div className='start__settings list'>
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
                <button onClick={() => dispatch(minesweeperActions.pressStart())} className='start__btn'>СТАРТ</button>
            </StyledContent>
        </Popup>
    )
};

export default React.memo(StartGame);

const StyledContent = styled.div`
&.start {
    display: flex;
    flex-direction: column;
}

& .start__description {
    display: flex;
    flex-direction: column;

    & i:not(:last-child) {
        margin-bottom: px;
    }
}

& .start__title {
    text-align: center;
}

& .start__settings {
    margin: 10px 0;
}

& .list__item {
    display: flex;
    align-items: center;
    height: 40px;

    & input {
        width: 20px;
        height: 20px;
    }

    & label {
        margin-left: 10px;
    }
}

& .start__btn {
    margin: 0 auto;
    padding: 10px;
    width: 100px;
    background-color: ${variables.blueColor};
    color: #ffffff;
    border-radius: 4px;
    font-size: 18px;
    letter-spacing: 4px;
    font-weight: 700;

    &:hover {
        background-color: #0066df;
    }
}
`