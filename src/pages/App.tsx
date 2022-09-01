import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./main/Main";
import Minesweeper from "./minesweeper/Minesweeper";

const App = () => {

//   useEffect(() => {
//     dispatch(minesweeperActions.preloadSounds());
//   }, [dispatch]);

  return (
    <Routes>
      <Route path={""} element={<Main />} />
      <Route path={"/minesweeper"} element={<Minesweeper />} />
      {/* <Route path={"/login"} element={<Login />} />
      <Route path={"/profile"} element={<Profile />}/>  */}
    </Routes>
  );
};

export default React.memo(App);
