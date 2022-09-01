import React from "react";
import styled from "styled-components";

type PropTypes = {
    children: React.ReactNode,
}

const Layout:React.FC<PropTypes> = ({ children }) => {

  return (
    <Styled className="Layout">

      <div className="container">
        { children }
      </div>
      
    </Styled>
  );
}

export default React.memo(Layout);

const Styled = styled.div`
  &.Layout {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      padding: 0 15px;
    }
  }

  & .container {
    max-width: 1024px;
    width: 100%;
  }
`