import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import minesweeper from "../../assets/main/img/game-logo/minesweeper.png";
import labyrinth from "../../assets/main/img/game-logo/labyrinth.jpg";

const Main = () => {

  return (
    <Styled className="nav">
      <Link className="nav__link" to="/minesweeper">
        <img src={minesweeper} alt='bomb with timer' width={'300px'} height={'250px'}/>
      </Link>
      <Link className="nav__link" to="/labyrinth">
        <img src={labyrinth} alt='bomb with timer' width={'300px'} height={'250px'}/>
      </Link>
    </Styled>
  );
};

export default React.memo(Main);

const Styled = styled.nav`
&.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  min-height: 100vh;

  @media (max-width: 767.9px) {
    flex-direction: column;
  }
}

& .nav__link {
  max-width: 300px;
  max-height: 250px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.25);
}

& .nav__link:hover {
  transform: scale(1.1);
  transition: transform ease-in-out 0.2s;
}

& .nav__link img {
  object-fit: cover;
  object-position: bottom;
}
`