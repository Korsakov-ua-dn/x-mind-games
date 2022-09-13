import React, { ReactNode }  from "react";
import Portal from "./Portal";
import styled from "styled-components";

type PopupType = {
    children: ReactNode,
    color?: string,
}

const Popup:React.FC<PopupType> = ({ children, color = "rgba(0, 0, 0, 0.4)" }) => (
    <Portal>
        <StyledPopup className='popup' color={color}>
            <div className='popup__background'/>
            <div className='popup__content'>
                { children }
            </div>
        </StyledPopup>
    </Portal>
)

export default React.memo(Popup);

const StyledPopup = styled.div`
&.popup {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

& .popup__background {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
}

& .popup__content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 1;
    // max-width: 330px;
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}
`