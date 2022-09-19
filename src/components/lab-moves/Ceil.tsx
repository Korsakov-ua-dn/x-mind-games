import React from "react";

type PropsType = {
    i: number,
    movement: number,
    show: number
}

const Ceil:React.FC<PropsType> = ({ movement, show, i }) => {
    const classN = `${ show < i || show === 10 ? 'disable' : ''} ${i === show ? 'active' : ''} moves__ceil`;

    return (
        <span data-arrow={movement} className={classN}></span>
    )
}; // у спанов есть псевдоэлемент after

export default React.memo(Ceil);