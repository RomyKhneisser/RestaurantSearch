package com.example.JavaFullStack.Service;

import com.example.JavaFullStack.Model.Restaurant;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface RestaurantService {
    public ResponseEntity<List<Restaurant>> getAllRestaurants();
    public ResponseEntity<Restaurant> getRestaurantsById(@PathVariable("id") Integer id);
    public ResponseEntity<List<Restaurant>> getRestaurantsByName(@RequestParam String name);
    public ResponseEntity<List<Restaurant>> getRestaurantsByType(@RequestParam String type);
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant);

}
