import React from "react";
import styled from "styled-components";
import { variables } from "../../utils/variables";
import Bomb from "./Bomb";

type PropsType = {
    minutes: number,
    seconds: number,
    bid: number,
}

const Timer:React.FC<PropsType> = ({ minutes, seconds, bid}) => {
    const classN = `${minutes === 0 && seconds < 31 ? "dangerous" : ""}`

    return (
        <StyledTimer className="timer">
            <span>{minutes > 9 ? minutes : `0${minutes}`}</span>
                <Bomb bid={bid}/>
            <span className={classN}>{seconds > 9 ? seconds : `0${seconds}`}</span>
        </StyledTimer>
    )
}

export default React.memo(Timer);

const StyledTimer = styled.div`
&.timer {
    max-width: calc(500 * 100vh / 868);
    width: 100%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & span {
        font-size: 36px;
        font-weight: 700;
    }

    & .dangerous {
        color: ${variables.accentColor}
    }
}
`