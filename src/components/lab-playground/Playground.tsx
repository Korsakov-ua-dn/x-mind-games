import React, { DetailedHTMLProps, HTMLAttributes, MouseEvent }  from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { variables } from "../../utils/variables";

import startImage from "../../assets/labyrinth/img/start.webp"
import winImage from "../../assets/labyrinth/img/win.webp"
import loseImage from "../../assets/labyrinth/img/lose.webp"

type PropsType = {
    aspectRatio: number,
    clickCeilHandler: (e: MouseEvent<HTMLElement>) => void,
    disable: boolean,
    children: React.ReactNode[],
}

const Playground:React.FC<PropsType> = ({
    aspectRatio,
    clickCeilHandler,
    disable,
    children,
}) => {

    return (
        <Styled
            aspectRatio={aspectRatio}
            onClick={clickCeilHandler} 
            className={`${disable ? 'disable' : ''} table`}>
        
            { children }
            
        </Styled>
    )
}

export default React.memo(Playground);

const Styled = styled.main`
    &.table {
        display: grid;
        grid-template-columns: repeat(${(props: ThemedStyledProps<Pick<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "key" | keyof HTMLAttributes<HTMLElement>> & { aspectRatio:number }, any>) => props.aspectRatio}, 1fr);
        gap: 20px;
        max-width: calc(500 * 100vh / 868);
        margin: 30px auto;

        &.disable {
            pointer-events: none;
        }
    }

    & .table__ceil {
        padding-bottom: 100%;
        width: 100%;
        background-color: ${variables.backgroundColor};
        cursor: pointer;

        &.start {
            background-image: url(${startImage});
            // background-image: url(${process.env.REACT_APP_PUBLIC_API_URL}/assets/images/uc-white.png );
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        &.win {
            background-image: url(${winImage});
            background-size: 80%;
            background-position: center;
            background-repeat: no-repeat;
        }

        &.lose {
            background-image: url(${loseImage});
            background-size: 80%;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
`