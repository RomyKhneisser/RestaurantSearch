import * as type from "../types";

export function getRestaurants(page=0,name="",typeSelected=""){
    return{
        type: type.GET_RESTAURANTS_REQUESTED,
        action :{name: name, typeSelected: typeSelected,page:page }
    }
}
