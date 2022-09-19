import React, { ReactNode }  from "react";
import styled from "styled-components";
import { variables } from "../../utils/variables";

type PropsType = {
    children: ReactNode,
}

const Start:React.FC<PropsType> = ({ children }) => {

    return (
        <Styled className='start'>
            {children}
        </Styled>
    )
};

export default React.memo(Start);

const Styled = styled.div`
&.start {
    display: flex;
    flex-direction: column;
    max-width: 330px;
    width: 100%;
    padding: 15px;
    background-color: #ffffff;
}

& .start__description {
    display: flex;
    flex-direction: column;

    & i:not(:last-child) {
        margin-bottom: px;
    }
}

& .start__title {
    text-align: center;
}

& .list {
    margin: 20px 0;
}

& .list__item {
    display: flex;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    & input {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    & label {
        margin-left: 10px;
        cursor: pointer;
    }
}

& .start__btn {
    margin: 0 auto;
    padding: 10px;
    width: 100px;
    background-color: ${variables.blueColor};
    color: #ffffff;
    border-radius: 4px;
    font-size: 18px;
    letter-spacing: 4px;
    font-weight: 700;

    &:hover {
        background-color: #0066df;
    }
}
`