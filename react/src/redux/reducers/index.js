import {combineReducers} from "redux";
import users from "./users";
import restaurants from "./restaurants";
import types from "./restaurantsTypes";
import visitedRestaurants from "./visitedRest";

const rootReducer = combineReducers({
   // users: users,
    restaurants: restaurants,
    types: types,
    visitedRestaurants : visitedRestaurants,

});

export default rootReducer;