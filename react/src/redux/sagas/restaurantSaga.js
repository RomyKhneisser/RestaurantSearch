import {call, put, takeEvery} from "redux-saga/effects";

const apiUrl="http://localhost:8080/api";

function getApi(action){
    return fetch(apiUrl+"/restaurants?name="+action.name+"&type="+action.typeSelected+"&page="+action.page,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .catch((e)=> {throw "hai"})
}

function * fetchRestaurants(action){
    try{

        const restaurants= yield call(getApi,action.action);
        console.log(action.action);
        yield put({ type: "GET_RESTAURANTS_SUCCESS", restaurants: restaurants});
    
      
    }
    catch(e){
        yield put({type:'GET_RESTAURANTS_FAILED', message:e.message});
    }
}

function * restaurantSaga(){
    yield takeEvery('GET_RESTAURANTS_REQUESTED', fetchRestaurants);

}

export default restaurantSaga;