import {call, put, takeEvery} from "redux-saga/effects";

const apiUrl="http://localhost:8080/api";


function getRestaurantsTypes(){
    return fetch(apiUrl+"/restaurantsTypes",{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .catch((e)=> {throw "hai"})
}

function * fetchRestaurantsTypes(action){
    try{

        const types= yield call(getRestaurantsTypes);
         yield put({ type: "GET_RESTAURANTSTYPES_SUCCESS", types: types});
    
      
    }
    catch(e){
        yield put({type:'GET_RESTAURANTSTYPES_FAILED', message:e.message});
    }
}

function * restaurantsTypesSaga(){
    yield takeEvery('GET_RESTAURANTSTYPES_REQUESTED', fetchRestaurantsTypes);

}

export default restaurantsTypesSaga;