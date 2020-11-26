import * as type from "../types";

const intialState = {
    restaurants: [],
    loading: false,
    error: false,
    message: "",
}

export default function restaurants (state = intialState, action){
    switch(action.type){
        case type.GET_RESTAURANTS_REQUESTED:
            return{
                ...state,
                loading: true,
                restaurants: action.restaurants,
                error: false,
                message: "",
            }
        case type.GET_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false,
                restaurants : action.restaurants,
                error: false,
                message: "",
            }
            case type.GET_RESTAURANTS_FAILED:
            return{
                ...state,
                loading: false,
                error: true, 
                message: action.message,
            }
            default: 
            return state;
    }
}