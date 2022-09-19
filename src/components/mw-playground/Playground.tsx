import React, { DetailedHTMLProps, HTMLAttributes, MouseEvent }  from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { variables } from "../../utils/variables";

type PropsType = {
    aspectRatio: number,
    clickCeilHandler: (e: MouseEvent<HTMLElement>) => void,
    children: React.ReactNode,
}

const Playground:React.FC<PropsType> = ({ 
    aspectRatio,
    clickCeilHandler,
    children,
}) => {


    return (
        <Styled
            aspectRatio={aspectRatio}
            onClick={clickCeilHandler} 
            className={` table`}>
        
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
    margin: 20px auto;
}

& .table__ceil {
    position: relative;
    padding-bottom: 100%;
    width: 100%;
    background-color: ${variables.backgroundColor};

    &.active {
        background-color: ${variables.backgroundBlueColor};
    }
}

& .table__number {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
}
`