import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState: labyrinthState = {
  isOpenStart: true,
  aspectRatio: 3,
  listOfAllowedMoves: {},
  disable: true,
  startNumber: null,
  listOfMoves: [],
  correctAnswer: null,
  showAnswer: false,
  sounds: {},
}

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {
    setOpenStart(state, action) {
      state.isOpenStart = action.payload
    },
    setListOfAllowedMoves(state, action) {
      state.listOfAllowedMoves = action.payload
    },
    setDisable(state, action) {
      state.disable = action.payload
    },
    setAspectRatio(state, action) {
      state.aspectRatio = action.payload
    },
    setStartNumber(state, action) {
      state.startNumber = action.payload
    },
    setMoves(state, action) {
      state.listOfMoves = action.payload
    },
    setCorrectAnswer(state, action) {
      state.correctAnswer = action.payload
    },
    setShowAnswer(state, action) {
      state.showAnswer = action.payload
    },
  }
})

export const {
  setOpenStart,
  setListOfAllowedMoves,
  setDisable,
  setAspectRatio,
  setStartNumber,
  setMoves,
  setCorrectAnswer,
  setShowAnswer,
} = labyrinth.actions


// actions
export const labyrinthActions = {
  pressStart: createAction(`${labyrinth.name}/PRESS_START`),
  checkAnswer: createAction(`${labyrinth.name}/CHECK_ANSWER`, (id, ref) => ({
    payload: { id, ref },
  })),
  win: createAction(`${labyrinth.name}/WIN`),
  lose: createAction(`${labyrinth.name}/LOSE`),
  nextRound: createAction(`${labyrinth.name}/NEXT_ROUND`),
  preloadSounds: createAction(`${labyrinth.name}/PRELOAD_SOUNDS`),
}

// selectors
// export const selectPosts = (state: RootState) => state.posts.posts

// reducer
export default labyrinth.reducer

// types
type labyrinthState = {
  isOpenStart: boolean,
  aspectRatio: number,
  listOfAllowedMoves: {},
  disable: boolean,
  startNumber: number | null,
  listOfMoves: number[],
  correctAnswer: number | null,
  showAnswer: boolean,
  sounds: any //@todo clarify types
}