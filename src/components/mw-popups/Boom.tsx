import React  from "react";
import Popup from "../common/Popup";
import styled from "styled-components";
import BoomImg from "../../assets/minesweeper/img/boom.webp";

const Boom = () => {

    return (
        <Popup color="rgba(255,2550, 255, 1)">
            <StyledContent className='boom'>
                <img src={BoomImg} alt="boom" />
            </StyledContent>
        </Popup>
    )
};

export default React.memo(Boom);

const StyledContent = styled.div`

&.boom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

&.boom img {
    max-height: 100vh;
    max-width: 100%;
}
`