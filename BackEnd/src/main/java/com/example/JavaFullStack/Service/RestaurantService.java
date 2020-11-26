package com.example.JavaFullStack.Service;

import com.example.JavaFullStack.Model.Restaurant;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

public interface RestaurantService {
    public ResponseEntity<Map<String, Object>> getAllRestaurants(
            @RequestParam(required = false) String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size
    );
    public ResponseEntity<Restaurant> getRestaurantsById(@PathVariable("id") Integer id);

    public ResponseEntity<Map<String, Object>>getRestaurantsByType(@RequestParam String type,
                                                                   @RequestParam(defaultValue = "0") int page,
                                                                   @RequestParam(defaultValue = "4") int size);

    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant);

    public ResponseEntity<Map<String, Object>> findByNameAndByType(@RequestParam(required = false) String name,
                                                                   @RequestParam(required = false) String type,
                                                                   @RequestParam(defaultValue = "0") int page,
                                                                   @RequestParam(defaultValue = "4") int size);
  public List<String> findTypes();

}
