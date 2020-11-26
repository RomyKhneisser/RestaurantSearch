import {combineReducers} from "redux";
import restaurants from "./restaurants";
import types from "./restaurantsTypes";
import visitedRestaurants from "./visitedRest";

const rootReducer = combineReducers({
    restaurants: restaurants,
    types: types,
    visitedRestaurants : visitedRestaurants,
});

export default rootReducer;