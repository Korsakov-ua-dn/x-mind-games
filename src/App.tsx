import styled from "styled-components";
import Header from "./components/header/Header";
import GameController from "./components/playground/GameController";
import StartGame from "./components/popups/StartGame";
import YouWin from "./components/popups/YouWin";
import YouLose from "./components/popups/YouLose";
import { useEffect } from "react";
import { preloadAudio } from "./utils/preloadAudio"
import { useAppSelector } from "./utils/hooks";

const App = () => {
  const modal = useAppSelector(s => s.minesweeper.modal);
  const bid: number | null = useAppSelector(s => s.minesweeper.bid); // генерируется после клика старт

  // пути картинок для предварительной импорта (браузер закэширует и другие компоненты их получат моментально из кэша)
  // const imagesPath = [
  //   './assets/img/mine.webp',
  // ]

  console.log("modal: ", modal);
  

  const renderModal = (modal: string) => {
    switch(modal) {
      case 'startGame': return <StartGame/>
      case 'youWin': return <YouWin/>
      case 'youLose': return <YouLose/>
      default: return ''
    }
  }

  useEffect(() => {
    preloadAudio();
  }, [])

  return (
    <StyledApp className="App">

      <div className="container">
        <Header/>
        { bid && <GameController/> }
      </div>
      
      {/* {imagesPath.map((el, i) => <NotViewImg key={i} imgComponent={require(`${el}`)}/> )} */}
      
     { modal && renderModal(modal) }
      
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
// const NotViewImg = styled.div`
//     position: absolute;
//     background-image: url(${(props: ThemedStyledProps<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {}, any>) => props.imgComponent});
//     opacity: 0;
// `

