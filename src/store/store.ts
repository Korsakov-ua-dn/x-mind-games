import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootSaga from "./minesweeper/sagas";
import minesweeper from "./minesweeper/minesweeper-slice";

const rootReducer = combineReducers({
    minesweeper,
});

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