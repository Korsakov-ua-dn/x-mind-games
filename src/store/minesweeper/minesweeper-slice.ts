import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: minsweeperState = {
  modal: 'startGame',
  // isWinView: false,
  // isLoseView: false,
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
    pressStart(state, action) { // bid = 2 - стартовый номер мины
        state.bid = action.payload
    },
    win(){},
    lose(){},
    nextRound(){},
    setLevel(state, action) {
      state.level = action.payload
    },
    setBid(state, action) {
      state.bid = action.payload
    },
    setSteps(state, action) {
      state.listOfSteps = action.payload
    },
    // viewWin(state, action) {
    //   state.isWinView = action.payload
    // },
    // viewLose(state, action) {
    //   state.isLoseView = action.payload
    // },
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
  pressStart,
  win,
  lose,
  nextRound,
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
  pressStart: createAction(`${minesweeper.name}/PRESS_START`, (bid: number) => ({
    payload: { bid },
  })),
  // fetchAll: createAction(`${postsSlice.name}/fetchAll`),
  // fetchAllSucceeded: postsSlice.actions.fetchAllSucceeded,
  // update: createAction<Post>(`${postsSlice.name}/update`),
  // delete: createAction<Post>(`${postsSlice.name}/delete`),
}

// selectors
// export const selectPosts = (state: RootState) => state.posts.posts


// reducer
export default minesweeper.reducer

// types
type minsweeperState = {
  modal: string,
  // isWinView: boolean,
  // isLoseView: boolean,
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