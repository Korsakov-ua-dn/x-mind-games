import React, { MouseEvent, DetailedHTMLProps, HTMLAttributes, useCallback }  from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { variables } from "../../utils/variables";
import { toggleActiveCeil } from "../../store/minesweeper/minesweeper-slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const Playground = () => {
    const dispatch = useAppDispatch();
    const aspectRatio = useAppSelector(s => s.minesweeper.gameParams.aspectRatio);
    const listOfSteps = useAppSelector(s => s.minesweeper.listOfSteps);
    const activeCeilsList = useAppSelector(s => s.minesweeper.activeCeilsList);
    // console.log("listOfSteps: ", listOfSteps);
  

// вещаем один обработчик для всех ячеек
    const clickCeilHandler = useCallback((e: MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLElement).tagName === 'STRONG') {

            let id = Number((e.target as HTMLElement).id)
            dispatch(toggleActiveCeil(id));
        }
    }, [dispatch])

    return (
        <StyledTable
            aspectRatio={aspectRatio}
            onClick={clickCeilHandler} 
            className={` table`}>
        
            {  
                listOfSteps.map(number => <Ceil 
                    number={number}
                    active={!!activeCeilsList.find(id => id === number)}
                    key={number}/>)
            }
            
        </StyledTable>
    )
}

export default React.memo(Playground);

type CeilType = {
    number: number,
    active: boolean
}

const Ceil:React.FC<CeilType> = React.memo(({ number, active }) => {
    const classN = `${active ? 'active' : ''} table__ceil`

    return (
        <span className={classN} >
            <strong id={String(number)} className="table__number">{number}</strong>
        </span>
    )
});

const StyledTable = styled.main`
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