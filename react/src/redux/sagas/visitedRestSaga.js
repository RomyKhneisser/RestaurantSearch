import {call, put, takeEvery} from "redux-saga/effects";

const apiUrl="http://localhost:8080/api";

function getVisitedRestaurants(){
    return fetch(apiUrl+"/visitedrests",{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .catch((e)=> {throw "hai"})
}

function * fetchVisitedRestaurants(action){
    try{

        const visitedRestaurants = yield call(getVisitedRestaurants);
        yield put({ type: "GET_VISITEDRESTAURANTS_SUCCESS", visitedRestaurants : visitedRestaurants });
    
      
    }
    catch(e){
        yield put({type:'GET_VISITEDRESTAURANTS_FAILED', message:e.message});
    }
}

function * visitedRestSaga(){
    yield takeEvery('GET_VISITEDRESTAURANTS_REQUESTED', fetchVisitedRestaurants);

}

export default visitedRestSaga;
