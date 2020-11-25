import * as type from "../types";

export function getVisitedRestaurants(){
    return{
        type : type.GET_VISITEDRESTAURANTS_REQUESTED,   
    }
}
export function postVisitedRestaurants(idRestaurant){
    return{
        type : type.POST_VISITEDRESTAURANTS_REQUESTED,
        idRestaurant : idRestaurant, 
    }
}

export function deleteVisitedRestaurants(idRestaurant){
    return{
        type : type.DELETE_VISITEDRESTAURANTS_REQUESTED,
        idRestaurant : idRestaurant, 
    }
}