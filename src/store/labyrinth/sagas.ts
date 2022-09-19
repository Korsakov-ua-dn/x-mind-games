import { put, takeEvery, all, select, call } from 'redux-saga/effects'
import { RootState } from "../store";
import { delay } from '../../utils/delay';
import { 
  setOpenStart,
  setListOfAllowedMoves,
  setDisable,
  setStartNumber,
  setMoves,
  setCorrectAnswer,
  setShowAnswer,
  labyrinthActions,
} from './labyrinth-slice'
import { SagaIterator } from 'redux-saga';
// import { Howl } from 'howler';
import { getRandomInt } from '../../utils/getRandomInt';
import { getListOfAllowMoves } from '../../utils/getListOfAllowMoves';
import { getLabyrinthSteps } from '../../utils/getLabyrinthSteps';


// worker Sagas
export function* pressStartWorker(action: any): SagaIterator  {
  const aspectRatio: number = yield select((state: RootState) => state.labyrinth.aspectRatio)

  // генерируем и добавляем в стейт стартвое значение
  const startNumber = getRandomInt(1, Math.pow(aspectRatio, 2));
  yield put(setStartNumber(startNumber))

  // закрываем модалку
  yield put(setOpenStart(false))

  // генерируем список допустимых шагов для всех ячеек
  const listOfAllowedMoves = getListOfAllowMoves(aspectRatio);
  // добавляем допустимые варианты шагов для каждой ячейки
  yield put(setListOfAllowedMoves(listOfAllowedMoves))
  
  // получаю рандомно сгенерированные шаги
  const listOfMoves = getLabyrinthSteps(listOfAllowedMoves, startNumber)
  // добавляем шаги для текущей игры
  yield put(setMoves(listOfMoves))

  // правильный ответ = последняя ячейча в массиве шагов
  yield put(setCorrectAnswer(listOfMoves[9]))
  console.log("правильный ответ: ", listOfMoves[9]);
}

export function* checkAnswerWorker(action: any): SagaIterator  {
  // задизейьлить клики по остальным ячейкам
  yield put(setDisable(true))
  // правильный ответ
  const correctAnswer: number = yield select((state: RootState) => state.labyrinth.correctAnswer)
  // ответ игрока
  const userChoise = action.payload.id;
  // ref на span по которому был клик
  const ref = action.payload.ref;

  if (userChoise === correctAnswer) {
    ref.classList.add("win"); // показываем знак победы в кликнутой ячейке
    yield call(delay, 1000)
    ref.classList.remove("win");
  } else {
    ref.classList.add("lose"); // показываем знак проигрыша в кликнутой ячейке
    yield call(delay, 1000)
    ref.classList.remove("lose");
    yield put(setShowAnswer(true)) // показываем знак победы в правильной ячейке
    yield call(delay, 1000)
    yield put(setShowAnswer(false))
  }

  // сбрасываем значение для стартовой ячейки
  yield put(setStartNumber(null))
  
  // показываем стартовое диалоговое окно
  yield put(setOpenStart(true))
}

// watcher Sagas
export function* startWatcher(): SagaIterator  {
  yield takeEvery(labyrinthActions.pressStart.type, pressStartWorker)
}

export function* chechAnswerWatcher(): SagaIterator  {
  yield takeEvery(labyrinthActions.checkAnswer.type, checkAnswerWorker)
}

export default function* rootSaga() {
  yield all([
    startWatcher(),
    chechAnswerWatcher(),
  ])
}