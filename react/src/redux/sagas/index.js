import { all } from 'redux-saga/effects';
import userSaga from "./userSaga";
import restaurantSaga from './restaurantSaga';
import restaurantsTypesSaga from "./restaurantsTypesSaga";
import visitedRestSaga from './visitedRestSaga';

export default function* rootSaga(){
    yield all([
        //userSaga(),
        restaurantSaga(),
        restaurantsTypesSaga(),
        visitedRestSaga(),


    ])
}

