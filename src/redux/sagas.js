import { all, call, put, takeLatest } from 'redux-saga/effects';
import gameInfo from '../client/gameInfo';
import * as types from './constants/actionTypes'


export function* getTopGames(action) {
    try {
        const games = yield call(gameInfo.getTopGames, action.payload);
        yield put({ type: types.FIND_POPULAR_GAMES_SUCCEEDED, payload: games });
    } catch (e) {
        console.log(e)
        yield put({ type: types.FIND_POPULAR_GAMES_FAILED, message: e.message });
    }
}

function* pricesSagas() {
    yield all([
        takeLatest(types.FIND_POPULAR_GAMES_REQUESTED, getTopGames),
    ]);
}


export default pricesSagas;
