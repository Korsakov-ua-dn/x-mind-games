import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { minesweeperActions } from "../../store/minesweeper/minesweeper-slice";

import Layout from "../../components/common/Layout";
import PreloadImg from "../../components/common/PreloadImg";
import GameController from "../../components/playground/GameController";
import Header from "../../components/header/Header";
import YouLose from "../../components/popups/YouLose";
import YouWin from "../../components/popups/YouWin";
import StartGame from "../../components/popups/StartGame";

import boom from "../../assets/minesweeper/img/boom.webp"
import mine from "../../assets/minesweeper/img/mine.webp"

const Minesweeper = () => {
  const modal = useAppSelector((s) => s.minesweeper.modal);
  const bid: number | null = useAppSelector((s) => s.minesweeper.bid); // генерируется после клика старт
  const dispatch = useAppDispatch();

  // пути картинок для предварительного импорта (браузер закэширует и другие компоненты их получат моментально из кэша)
  const options = {
    components: useMemo(() => [
        boom,
        mine,
    ], [] ),
  };

  const renderModal = (modal: string) => {
    switch (modal) {
      case "startGame":
        return <StartGame />;
      case "youWin":
        return <YouWin />;
      case "youLose":
        return <YouLose />;
      default:
        return "";
    }
  };

  useEffect(() => {
    dispatch(minesweeperActions.preloadSounds());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Header />
        {bid && <GameController />}
      </Layout>

      {modal && renderModal(modal)}

      {/* Предварительно рендерю картинки для того что бы их закешировал браузер */}
      {options.components.map((el, i) => (
        <PreloadImg key={i} imgComponent={el} />
      ))}
    </>
  );
};

export default React.memo(Minesweeper);
