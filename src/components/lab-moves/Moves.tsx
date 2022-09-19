import React, { DetailedHTMLProps, HTMLAttributes }  from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { variables } from "../../utils/variables";
// картинки
import arrowRightImage from "../../assets/labyrinth/img/arrow-right.webp"

type PropsType = {
    aspectRatio: number,
    className: string,
    children: React.ReactNode[],
}

const Moves:React.FC<PropsType> = ({
    aspectRatio,
    children,
}) => {

    return (
        <Styled
            aspectRatio={aspectRatio}
            className={`moves`}>
        
            { children }
            
        </Styled>
    )
}

export default React.memo(Moves);

const Styled = styled.div`
    &.moves {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        max-width: calc(500 * 100vh / 868);
        margin: 0 auto;
    }

    & .moves__ceil {
        position: relative;
        padding-bottom: 100%;
        width: 100%;
        background-color: ${variables.backgroundBlueColor};
       
// по умолчанию стрелка - право соответствует ходу в перед (+1), (-1) ход назад, (+ соотношение сторон) - ход вниз, (- соотношение сторон) - ход вверх 
        &[data-arrow="-1"]::after {
            transform: rotate(180deg);
        }
        &[data-arrow="${(props: ThemedStyledProps<Pick<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "key" | keyof HTMLAttributes<HTMLElement>> & { aspectRatio:number }, any>) => props.aspectRatio}"]::after {
            transform: rotate(90deg);
        }
        &[data-arrow="${props => -props.aspectRatio}"]::after {
            transform: rotate(-90deg);
        }

        &.disable::after {
            background-image: unset;
        }

        &.active {
            background-color: ${variables.accentColor};
        }
    }

    & .moves__ceil::after {
        position: absolute;
        content: '';
        background-image: url(${arrowRightImage});
        background-size: 60%;
        background-position: center;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`