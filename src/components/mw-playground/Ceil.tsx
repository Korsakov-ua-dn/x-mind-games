import React from "react";

type PropsType = {
    number: number,
    active: boolean
}

const Ceil:React.FC<PropsType> = ({ number, active }) => {
    const classN = `${active ? 'active' : ''} table__ceil`

    return (
        <span className={classN} >
            <strong id={String(number)} className="table__number">{number}</strong>
        </span>
    )
};

export default React.memo(Ceil);