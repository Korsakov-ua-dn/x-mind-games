import React, { MouseEvent }  from "react";
import { minesweeperActions, setLevel } from "../../store/minesweeper/minesweeper-slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

import Popup from "../../components/common/Popup";
import Start from "../../components/mw-popups/Start";

const StartPopup = () => {
    const dispatch = useAppDispatch();
    const level = useAppSelector(s => s.minesweeper.level);

    const fieldSelectionHandler = (e: MouseEvent<HTMLElement>) => {
        dispatch(setLevel(e.currentTarget.getAttribute("data-level")))
    }

    const pressStartHandler = () => dispatch(minesweeperActions.pressStart());

    return (
        <Popup>
            <Start  level={level}
                    fieldSelectionHandler={fieldSelectionHandler}
                    pressStartHandler={pressStartHandler} />
        </Popup>
    )
};

export default React.memo(StartPopup);