package com.example.JavaFullStack.Controller;

import com.example.JavaFullStack.Model.Restaurant;
import com.example.JavaFullStack.Service.Impl.RestaurantServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class RestaurantController {

    @Autowired
    RestaurantServiceImpl restaurantService;

    @GetMapping("/restaurants")
    public ResponseEntity<List<Restaurant>> getAllRestaurants() {

        return restaurantService.getAllRestaurants();
    }

   @GetMapping("/restaurants/{id}")
    public ResponseEntity<Restaurant> getRestaurantsById(@PathVariable("id") Integer id) {
        return restaurantService.getRestaurantsById(id);
    }

    @GetMapping("/restaurantsbyName")
    public ResponseEntity<List<Restaurant>> getRestaurantsByName(String name) {
        return restaurantService.getRestaurantsByName(name);
    }

    @GetMapping("/restaurantsbyType")
    public ResponseEntity<List<Restaurant>> getRestaurantsByType(String type) {
        return restaurantService.getRestaurantsByType(type);
    }


    @PostMapping("/restaurants")
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantService.createRestaurant(restaurant);
    }

}
