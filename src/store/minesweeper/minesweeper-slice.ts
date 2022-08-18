import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: minsweeperState = {
  modal: 'startGame',
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
} = minesweeper.actions


// actions
export const minesweeperActions = {
  pressStart: createAction(`${minesweeper.name}/PRESS_START`, (bid = 2) => ({
    payload: { bid },
  })),
  win: createAction(`${minesweeper.name}/WIN`),
  lose: createAction(`${minesweeper.name}/LOSE`),
  nextRound: createAction(`${minesweeper.name}/NEXT_ROUND`),
}

// selectors
// export const selectPosts = (state: RootState) => state.posts.posts

// reducer
export default minesweeper.reducer

// types
type minsweeperState = {
  modal: 'startGame' | 'youWin' | 'youLose',
  activeCeilsList: number[],
  bid: number | null,
  listOfSteps: number[],
  correctAnswerList: number[],
  level: "easy" | "medium" | "hard" | "extra hard",
  gameParams: {
    aspectRatio: number,
    delay: number,
    сoefficient: number,
  },
}