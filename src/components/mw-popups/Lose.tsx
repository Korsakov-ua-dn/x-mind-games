
import React  from "react";
import Popup from "../common/Popup";
import styled from "styled-components";
import { variables } from "../../utils/variables";

const Lose = () => (
    <Popup color="rgba(255, 255, 255, 1)">
        <StyledContent className='lose'>
            You lose, try again.
        </StyledContent>
    </Popup>
);

export default React.memo(Lose);

const StyledContent = styled.div`

&.lose {
    max-width: 330px;
    width: 100%;
    padding: 50px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: ${variables.accentColor};
    background-color: #ffffff;
}
`