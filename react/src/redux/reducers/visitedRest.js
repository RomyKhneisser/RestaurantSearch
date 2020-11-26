import * as type from "../types";

const intialState = {
    visitedRestaurants : [],
    loading: false,
    error: false,
    message:"",
}

export default function restaurants (state = intialState, action){
    switch(action.type){
        case type.GET_VISITEDRESTAURANTS_REQUESTED:
            return{
                    ...state,
                    loading: true,
                    visitedRestaurants : action.visitedRestaurants ,
                    error: false,
                    message:"",

                }
            case type.GET_VISITEDRESTAURANTS_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    visitedRestaurants : action.visitedRestaurants ,
                    error: false,
                    message:"",

                }
            case type.GET_VISITEDRESTAURANTS_FAILED:
                return{
                    ...state,
                    loading: false,
                    error: true,
                    message:action.message,

                }
            case type.POST_VISITEDRESTAURANTS_REQUESTED:
                return{
                    ...state,
                    loading: true,
                    visitedRestaurants : action.visitedRestaurants ,
                    error: false,
                    message:"",
    
                }
            case type.POST_VISITEDRESTAURANTS_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    visitedRestaurants : action.visitedRestaurants ,
                    error: false,
                    message:"",
    
                }
            case type.POST_VISITEDRESTAURANTS_FAILED:
                return{
                    ...state,
                    loading: false,
                    error: true,
                    message:action.message,
    
                }
            case type.POST_VISITEDRESTAURANTS_REQUESTED:
                return{
                    ...state,
                    loading: true,
                    visitedRestaurants : action.visitedRestaurants ,
                    error: false,
                    message:"",
    
                }
            case type.POST_VISITEDRESTAURANTS_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    visitedRestaurants : action.visitedRestaurants ,
                    error: false,
                    message:"",
    
                }
            case type.POST_VISITEDRESTAURANTS_FAILED:
                return{
                    ...state,
                    loading: false,
                    error: true,
                    message:action.message,
    
                }
      
            case type.DELETE_VISITEDRESTAURANTS_REQUESTED:
            return{
                    ...state,
                    loading: true,
                    error: false,
                    message:"",
        
                }
            case type.DELETE_VISITEDRESTAURANTS_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    error: false,
                    message:"",
                }
            case type.DELETE_VISITEDRESTAURANTS_FAILED:
                return{
                    ...state,
                    loading: false,
                    error: true,
                    message:action.message,
                }    
            default: 
                return state;
    }
}