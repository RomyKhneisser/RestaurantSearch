package com.example.JavaFullStack.Service.Impl;

import com.example.JavaFullStack.Model.Restaurant;
import com.example.JavaFullStack.Repository.RestaurantRepository;
import com.example.JavaFullStack.Service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    RestaurantRepository restaurantRepository;

   @Override
    public ResponseEntity<List<Restaurant>> getAllRestaurants() {
        try {
            List<Restaurant> restaurant = new ArrayList<Restaurant>();
            restaurantRepository.findAll().forEach(restaurant::add);
            return new ResponseEntity<>(restaurant, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<Restaurant> getRestaurantsById(Integer id) {
        Optional<Restaurant> restaurantData = restaurantRepository.findById(id);

        if (restaurantData.isPresent()) {
            return new ResponseEntity<>(restaurantData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<List<Restaurant>> getRestaurantsByName(@RequestParam String name) {
        try {
            List<Restaurant> restaurant = new ArrayList<Restaurant>();

            if (name == null){
               restaurantRepository.findAll().forEach(restaurant ::add);
            }
            else
               restaurantRepository.findByName(name).forEach(restaurant ::add);

            if (restaurant .isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(restaurant , HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<List<Restaurant>> getRestaurantsByType(@RequestParam String type) {
        try {
            List<Restaurant> restaurant = new ArrayList<Restaurant>();

            if (type == null){
                restaurantRepository.findAll().forEach(restaurant ::add);
            }
            else
                restaurantRepository.findByType(type).forEach(restaurant ::add);

            if (restaurant .isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(restaurant , HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<Restaurant> createRestaurant(Restaurant restaurant) {
        try {

            Restaurant newRestaurant = new Restaurant(restaurant.getName(), restaurant.getType(), restaurant.getCost(),restaurant.getAddress(),restaurant.getPhonenumber());
            restaurantRepository.save(newRestaurant);
            return new ResponseEntity<>(newRestaurant, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
