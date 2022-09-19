import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: minsweeperState = {
  modal: 'start',
  activeCeilsList: [],
  bid: null,
  listOfSteps: [],
  correctAnswerList: [],
  level: "easy",
  gameParams: {
    aspectRatio: 0,
    delay: 0,
    сoefficient: 0,
  },
  sounds: {},
}

const minesweeper = createSlice({
  name: 'minesweeper',
  initialState,
  reducers: {
    setLevel(state, action) {
      state.level = action.payload
    },
    setBid(state, action) {
      state.bid = action.payload
    },
    setSteps(state, action) {
      state.listOfSteps = action.payload
    },
    viewModal(state, action) {
      state.modal = action.payload
    },
    setCorrectAnswerList(state, action) {
      state.correctAnswerList = action.payload
    },
    setGameParams(state, action) {
      state.gameParams = action.payload
    },
    clearActiveCeil(state) {
      state.activeCeilsList =[]
    },
    toggleActiveCeil(state, action: PayloadAction<number>) {
      if (state.activeCeilsList.find( id => id === action.payload)) {
        return { ...state, activeCeilsList: state.activeCeilsList.filter(id => id !== action.payload) }
      } else {
        return { ...state, activeCeilsList: [...state.activeCeilsList, action.payload] }
      }
    },
    setSounds(state, action) {
      state.sounds = action.payload
    },
  }
})

export const {
  setLevel,
  setBid,
  setSteps,
  viewModal,
  setCorrectAnswerList,
  setGameParams,
  clearActiveCeil,
  toggleActiveCeil,
  setSounds,
} = minesweeper.actions


// actions
export const minesweeperActions = {
  pressStart: createAction(`${minesweeper.name}/PRESS_START`, (bid = 2) => ({
    payload: { bid },
  })),
  win: createAction(`${minesweeper.name}/WIN`),
  lose: createAction(`${minesweeper.name}/LOSE`),
  nextRound: createAction(`${minesweeper.name}/NEXT_ROUND`),
  preloadSounds: createAction(`${minesweeper.name}/PRELOAD_SOUNDS`),
}

// selectors
// export const selectPosts = (state: RootState) => state.posts.posts

// reducer
export default minesweeper.reducer

// types
type minsweeperState = {
  modal: 'start' | 'win' | 'lose' | 'boom',
  activeCeilsList: number[],
  bid: number | null,
  listOfSteps: number[],
  correctAnswerList: number[],
  level: levelType,
  gameParams: {
    aspectRatio: number,
    delay: number,
    сoefficient: number,
  },
  sounds: any //@todo clarify types
}

export type levelType = "easy" | "medium" | "hard" | "extra hard";