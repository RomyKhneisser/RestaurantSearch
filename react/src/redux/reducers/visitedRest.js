import * as type from "../types";

const intialState = {
    visitedRestaurants : [],
    loading: false,
  error: false,

}

export default function restaurants (state = intialState, action){
    switch(action.type){
        case type.GET_VISITEDRESTAURANTS_REQUESTED:
            return{
                ...state,
                loading: true,
                visitedRestaurants : action.visitedRestaurants ,
             error: false,

            }
            case type.GET_VISITEDRESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false,
                visitedRestaurants : action.visitedRestaurants ,
                error: false,

            }
            case type.GET_VISITEDRESTAURANTS_FAILED:
            return{
                ...state,
                loading: false,
                error: true,

            }
            default: 
            return state;
    }
}