import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { minesweeperActions } from "../../store/minesweeper/minesweeper-slice";

import Layout from "../../components/common/Layout";
import PreloadImg from "../../components/common/PreloadImg";
import Controller from "../../containers/minesweeper/Controller";
import Header from "../../components/header/Header";
import Lose from "../../components/mv-popups/Lose";
import Win from "../../components/mv-popups/Win";
import Start from "../../components/mv-popups/Start";
import Boom from "../../components/mv-popups/Boom";

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
      case "start":
        return <Start />;
      case "win":
        return <Win />;
      case "lose":
        return <Lose />;
      case "boom":
        return <Boom />;
      default:
        return "";
    }
  };

  // Предзагрузка аудио
  useEffect(() => {
    dispatch(minesweeperActions.preloadSounds());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Header title="САПЕР"/>
        {bid && <Controller bid={bid} />}
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
