import React, { MouseEvent }  from "react";
import { labyrinthActions, setAspectRatio } from "../../store/labyrinth/labyrinth-slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
// компоненты
import Popup from "../../components/common/Popup";
import Start from "../../components/lab-popups/Start";

const StartPopup = () => {
    const dispatch = useAppDispatch();
    const aspectRatio = useAppSelector(s => s.labyrinth.aspectRatio);

    const fieldSelectionHandler = (e: MouseEvent<HTMLElement>) => {
        const aspectRatio = Number(e.currentTarget.getAttribute("data-level"));
        dispatch(setAspectRatio(aspectRatio))
    }

    const pressStartHandler = () => dispatch(labyrinthActions.pressStart())

    return (
        <Popup>
            <Start  aspectRatio={aspectRatio}
                    fieldSelectionHandler={fieldSelectionHandler}
                    pressStartHandler={pressStartHandler} />
        </Popup>
    )
};

export default React.memo(StartPopup);