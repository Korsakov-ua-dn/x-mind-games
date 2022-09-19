import React from "react";

type PropsType = {
    i: number,
    start: boolean,
    win: boolean
}

const Ceil:React.FC<PropsType> = ({ i, start, win }) => {
    const classN = `${start ? 'start' : ''} ${win ? 'win' : ''} table__ceil`

    return (
        <span id={ String(i) } className={classN} />
    )
};

export default React.memo(Ceil);