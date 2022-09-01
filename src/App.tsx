import styled from "styled-components";
import Header from "./components/header/Header";
import GameController from "./components/playground/GameController";
import StartGame from "./components/popups/StartGame";
import YouWin from "./components/popups/YouWin";
import YouLose from "./components/popups/YouLose";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { minesweeperActions } from "./store/minesweeper/minesweeper-slice";

const App = () => {
  const modal = useAppSelector(s => s.minesweeper.modal);
  const bid: number | null = useAppSelector(s => s.minesweeper.bid); // генерируется после клика старт
  const dispatch = useAppDispatch();

  // пути картинок для предварительного импорта (браузер закэширует и другие компоненты их получат моментально из кэша)
  const imagesPath = [
    './assets/img/mine.webp',
  ]

  const renderModal = (modal: string) => {
    switch(modal) {
      case 'startGame': return <StartGame/>
      case 'youWin': return <YouWin/>
      case 'youLose': return <YouLose/>
      default: return ''
    }
  }

  useEffect(() => {
    dispatch(minesweeperActions.preloadSounds());
  }, [dispatch])

  return (
    <StyledApp className="App">

      <div className="container">
        <Header/>
        { bid && <GameController/> }
      </div>

      { modal && renderModal(modal) }

      {/* Предварительно рендерю картинки для того что бы их закешировал браузер */}
      {imagesPath.map((el, i) => <NotViewImg key={i} imgComponent={require(`${el}`)}/> )}
      
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  &.App {
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

type NotViewImgProps = {
  readonly imgComponent: any;
}

const NotViewImg = styled.div<NotViewImgProps>`
    position: absolute;
    background-image: url(${props => props.imgComponent});
    opacity: 0;
`

