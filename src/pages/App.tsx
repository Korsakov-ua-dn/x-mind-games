import React from "react";
import {Routes, Route} from "react-router-dom";
// import Main from "./main/Main";
// import Minesweeper from "./minesweeper/Minesweeper";

const Main = React.lazy(() => import("./main/Main"));
const Minesweeper = React.lazy(() => import("./minesweeper/Minesweeper"));

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
      {/* <Route path={"/login"} element={<Login />} />
      <Route path={"/profile"} element={<Profile />}/>  */}
    </Routes>
  );
};

export default React.memo(App);
