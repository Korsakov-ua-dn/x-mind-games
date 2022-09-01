import { put, takeEvery, all, select, call, take } from 'redux-saga/effects'
import { RootState } from "../store";
import { getCorrectAnswerList } from '../../utils/getCorrectAnswerList';
import { getSteps } from '../../utils/getSteps';
import { delay } from '../../utils/delay';
import { 
  viewModal,
  setGameParams,
  setBid,
  setSteps,
  setCorrectAnswerList,
  clearActiveCeil,
  setSounds,
  minesweeperActions,
} from './minesweeper-slice'
import { SagaIterator } from 'redux-saga';
import { Howl } from 'howler';


// worker Sagas
export function* pressStartWorker(action: any): SagaIterator  {
  yield put(setBid(action.payload.bid)) // + скроет игровое поле

  // закрываем модалку
  yield put(viewModal(''))
  
  // выставляем настройки игры соответственно уровню сложности
  const level: string = yield select((state: RootState) => state.minesweeper.level)

  let gameParams = {
    aspectRatio: 3, // соотношение сторон игрового поля
    delay: 3, // задержка до взрыва в минутах
    сoefficient: 1, // коэффициент увеличивающий игровые числа
  }

  switch (level) {
    case "medium": 
      gameParams = {...gameParams, delay: 2};
      break;
    case "hard": 
      gameParams = {...gameParams, aspectRatio: 4, delay: 2};
      break;
    case "extra hard": 
      gameParams = { aspectRatio: 4, delay: 1.5, сoefficient: 2};
      break;
    default: gameParams = {...gameParams};
  }

  yield put(setGameParams(gameParams));

  // генерируем ставку
  // yield put(setBid());

  const bid: number = yield select((state: RootState) => state.minesweeper.bid)
  const aspectRatio = gameParams.aspectRatio;
  const сoefficient = gameParams.сoefficient;

  // получаю рандомно сгенерированный набор уникальных значений в заданном диапозоне (new Set)
  const listOfSteps = getSteps(aspectRatio, bid, сoefficient)
  // добавляем список шагов для текущей игры
  yield put(setSteps([...listOfSteps]));

  // добавляем правильный ответ для текущей игры (список чисел)
  const correctAnswerlist = getCorrectAnswerList(listOfSteps, bid)
  yield put(setCorrectAnswerList(correctAnswerlist))

}

export function* winWorker() {
  const bid: number = yield select((state: RootState) => state.minesweeper.bid)
  yield put(setBid(null)) // скроет игровое поле
  yield put(viewModal('youWin'))
  yield put(clearActiveCeil()) // очистит список активных ячеек

  if (bid === 9) {
    yield call(delay, 2000)
    // yield put(viewWin(false)) // заменить другой модалкой, без кнопки!!!
    yield put(viewModal('startGame')) // открывает стартовое диалоговое окно игры
    
  } else {
    yield take(minesweeperActions.nextRound.type)
    yield put(viewModal(''))
    yield put(minesweeperActions.pressStart( bid + 1 ))
  }
}

export function* LoseWorker() {

  yield call(delay, 0)
  yield put(setBid(null)); // скроет игровое поле до появления новой ставки

  yield call(delay, 1000)
  yield put(viewModal('youLose')) // открывает попап "You Lose"

  yield call(delay, 2000)
  yield put(clearActiveCeil()) // очистит список активных ячеек
  yield put(viewModal('startGame')) // открывает стартовое диалоговое окно игры
}

export function* SoundsWorker() {

  const tick = new Howl({
    src: ["tick1s.mp3"],
    // volume: 1,
    loop: true,
    // html5: true,
    // interrupt: true,
    rate: 1.05,
  })

  const boom = new Howl({
    src: ["boom.mp3"],
    // volume: 1,
    // loop: true,
    // html5: true,
  })

  yield put(setSounds({tick, boom}));
}

// watcher Sagas
export function* start(): SagaIterator  {
  yield takeEvery(minesweeperActions.pressStart.type, pressStartWorker)
  // yield takeEvery('GAME/PRESS_START', pressStartWorker)
}

export function* win() { 
  yield takeEvery(minesweeperActions.win.type, winWorker)
}

export function* lose() { 
  yield takeEvery(minesweeperActions.lose.type, LoseWorker)
}

export function* preloadSounds() { 
  yield takeEvery(minesweeperActions.preloadSounds.type, SoundsWorker)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    start(),
    win(),
    lose(),
    preloadSounds(),
  ])
}