import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

import minesweeperSaga from "./minesweeper/sagas";
import labyrinthSaga from "./labyrinth/sagas";
import minesweeper from "./minesweeper/minesweeper-slice";
import labyrinth from "./labyrinth/labyrinth-slice";

const rootReducer = combineReducers({
    minesweeper,
    labyrinth,
});

function* rootSaga() {
    yield all([
        minesweeperSaga(),
        labyrinthSaga(),
    ])
  }

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        sagaMiddleware
    ],
    devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga);

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;

export default store;