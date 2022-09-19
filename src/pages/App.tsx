import React from "react";
import {Routes, Route} from "react-router-dom";

const Main = React.lazy(() => import("./main/Main"));
const Minesweeper = React.lazy(() => import("./minesweeper/Minesweeper"));
const Labyrinth = React.lazy(() => import("./labyrinth/Labyrinth"));

const App = () => {

  return (
    <Routes>
      <Route path={""} element={
        <React.Suspense fallback={<>...</>}>
          <Main />
        </React.Suspense>
      }/>
      <Route path={"/minesweeper"} element={
        <React.Suspense fallback={<>...</>}>
          <Minesweeper />
        </React.Suspense>
      }/>
      <Route path={"/labyrinth"} element={
        <React.Suspense fallback={<>...</>}>
          <Labyrinth />
        </React.Suspense>
      }/>
    </Routes>
  );
};

export default React.memo(App);
