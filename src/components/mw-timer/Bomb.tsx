import React  from "react";
import styled from 'styled-components';
import bombImg from "../../assets/minesweeper/img/mine.webp"

type PropsType = {
    bid: number,
}

const Bomb:React.FC<PropsType> = ({ bid }) => {
    return (
        <StyledBid className='bomb'>
            <img 
                width={150}
                height={120}
                src={bombImg}
                className='bomb__img'
                alt={`bomb with number ${bid}`}/>
            <span className="bomb__number">{bid}</span>
        </StyledBid>
    )
} 

export default React.memo(Bomb);

const StyledBid = styled.div`
&.bomb {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

& .bomb__img {
    max-height: 120px;
    transform: translateX(28px);
}

& .bomb__number {
    position: absolute;
    left: 50%;
    transform: translateX(calc(-50% - 4px));
    bottom: 14px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 700;
    border: 1px solid black;
    border-radius: 50%;
    background-color: #fff;
}
`