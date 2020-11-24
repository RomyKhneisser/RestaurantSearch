import * as type from "../types";

const intialState = {
    types: [],
    loading: false,
  error: false,
}

export default function restaurantsTypes (state = intialState, action){
    switch(action.type){
        case type.GET_RESTAURANTSTYPES_REQUESTED:
            return{
                ...state,
                loading: true,
                types: action.types,
             error: false,

            }
            case type.GET_RESTAURANTSTYPES_SUCCESS:
            return{
                ...state,
                loading: false,
                types : action.types,
                error: false,

            }
            case type.GET_RESTAURANTSTYPES_FAILED:
            return{
                ...state,
                loading: false,
                error: true,

            }
            default: 
            return state;
    }
}