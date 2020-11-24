import * as type from "../types";

export function getRestaurantsTypes(types){
    return{
        type: type.GET_RESTAURANTSTYPES_REQUESTED ,
        types: types 
      
        
    }
}
