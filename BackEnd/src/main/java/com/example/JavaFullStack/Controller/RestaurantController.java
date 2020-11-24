package com.example.JavaFullStack.Controller;

import com.example.JavaFullStack.Model.Restaurant;
import com.example.JavaFullStack.Service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class RestaurantController {

    @Autowired
    RestaurantService restaurantService;


    @GetMapping("/restaurants")
    public ResponseEntity<Map<String, Object>> findByNameAndByType(@RequestParam(required = false) String name,
                                                                   @RequestParam(required = false) String type,
                                                                   @RequestParam(defaultValue = "0") int page,
                                                                   @RequestParam(defaultValue = "4") int size){
        return restaurantService.findByNameAndByType(name,type,page,size);
    }

   @GetMapping("/restaurants/{id}")
    public ResponseEntity<Restaurant> getRestaurantsById(@PathVariable("id") Integer id) {
        return restaurantService.getRestaurantsById(id);
    }

    @GetMapping("/restaurantsbyType")
    public ResponseEntity<Map<String, Object>> getRestaurantsByType(      @RequestParam(required = false) String type,
                                                                          @RequestParam(defaultValue = "0") int page,
                                                                          @RequestParam(defaultValue = "3") int size) {
        return restaurantService.getRestaurantsByType(type,page,size);
    }

    @PostMapping("/restaurants")
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantService.createRestaurant(restaurant);
    }

    @GetMapping("/restaurantsTypes")
    public List<String> findTypes(){
       return restaurantService.findTypes();
    }

}
