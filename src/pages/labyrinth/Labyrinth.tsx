import React, { useMemo } from "react";
import { useAppSelector } from "../../utils/hooks";
// картинки
import start from "../../assets/labyrinth/img/start.webp";
import arrow from "../../assets/labyrinth/img/arrow-right.webp";
import win from "../../assets/labyrinth/img/win.webp";
import lose from "../../assets/labyrinth/img/lose.webp";
// компоненты
import Layout from "../../components/common/Layout";
import PreloadImg from "../../components/common/PreloadImg";
import Header from "../../components/header/Header";
import StartPopup from "../../containers/labyrinth/StartPopup";
import PlaygroundContainer from "../../containers/labyrinth/PlaygroundContainer";
import MovesContainer from "../../containers/labyrinth/MovesContainer";

const Labyrinth = () => {
  const startNumber = useAppSelector((s) => s.labyrinth.startNumber);
  const isOpenStart = useAppSelector((s) => s.labyrinth.isOpenStart);

  // пути картинок для предварительной импорта (браузер закэширует и другие компоненты их получат моментально из кэша)
  const options = {
    components: useMemo(() => [start, arrow, win, lose], []),
  };

  return (
    <>
      <Layout>
        <Header title="ЛАБИРИНТ" />
        {startNumber && (
          <>
            <PlaygroundContainer />
            <MovesContainer />
          </>
        )}
      </Layout>

      { isOpenStart && <StartPopup /> }

      {/* Предварительно рендерю картинки для того что бы их закешировал браузер */}
      {
        options.components.map((el, i) => (
            <PreloadImg key={i} imgComponent={el} />
        ))
      }
    </>
  );
};

export default React.memo(Labyrinth);
