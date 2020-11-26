import {call, put, takeEvery} from "redux-saga/effects";

const apiUrl="http://localhost:8080/api";

function getVisitedRestaurantsApi(){
    return fetch(apiUrl+"/visitedrests",{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .catch((e)=> {throw "Error.."})
}

function * fetchVisitedRestaurants(action){
    try{

        const visitedRestaurants = yield call(getVisitedRestaurantsApi);
        yield put({ type: "GET_VISITEDRESTAURANTS_SUCCESS", visitedRestaurants : visitedRestaurants });
    
      
    }
    catch(e){
        yield put({type:'GET_VISITEDRESTAURANTS_FAILED', message:e.message});
    }
}


function postVisitedRestaurantsApi(idRestaurant){
    return fetch(apiUrl+"/visitedrests/"+idRestaurant,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .catch((e)=> {throw "Error.."})
}

function * storeVisitedRestaurants(action){
    try{

        yield call(postVisitedRestaurantsApi,action.idRestaurant);
        yield put({ type: "POST_VISITEDRESTAURANTS_SUCCESS"});
    
      
    }
    catch(e){
        yield put({type:'POST_VISITEDRESTAURANTS_FAILED', message:e.message});
    }
}

function deletetVisitedRestaurantsApi(idRestaurant){
    return fetch(apiUrl+"/visitedrests/"+idRestaurant,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .catch((e)=> {throw "Error.."})
}

function * removeVisitedRestaurants(action){
    try{
        yield call(deletetVisitedRestaurantsApi,action.idRestaurant);
        yield put({ type: "DELETE_VISITEDRESTAURANTS_SUCCESS"});
    }
    catch(e){
        yield put({type:'DELETE_VISITEDRESTAURANTS_FAILED', message:e.message});
    }
}

function * visitedRestSaga(){
    yield takeEvery('POST_VISITEDRESTAURANTS_REQUESTED', storeVisitedRestaurants);
    yield takeEvery('GET_VISITEDRESTAURANTS_REQUESTED', fetchVisitedRestaurants);
    yield takeEvery('DELETE_VISITEDRESTAURANTS_REQUESTED', removeVisitedRestaurants);

}



export default visitedRestSaga;
