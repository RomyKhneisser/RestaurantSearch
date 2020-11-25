import { all } from 'redux-saga/effects';
import restaurantSaga from './restaurantSaga';
import restaurantsTypesSaga from "./restaurantsTypesSaga";
import visitedRestSaga from './visitedRestSaga';

export default function* rootSaga(){
    yield all([
        restaurantSaga(),
        restaurantsTypesSaga(),
        visitedRestSaga(),
 


    ])
}

