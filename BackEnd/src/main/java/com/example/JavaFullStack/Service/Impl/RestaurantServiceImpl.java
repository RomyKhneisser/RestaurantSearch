package com.example.JavaFullStack.Service.Impl;

import com.example.JavaFullStack.Model.Restaurant;
import com.example.JavaFullStack.Repository.RestaurantRepository;
import com.example.JavaFullStack.Service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    RestaurantRepository restaurantRepository;

   @Override
    public ResponseEntity<Map<String, Object>> getAllRestaurants(
            @RequestParam(required = false) String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size
    ) {
        try {
            List<Restaurant> restaurants= new ArrayList<Restaurant>();
            Pageable paging = PageRequest.of(page, size);
            System.out.println(page);

            Page<Restaurant> pageRestaurants;
            if (name == null)
                pageRestaurants = restaurantRepository.findAll(paging);
            else
                pageRestaurants = restaurantRepository.findByNameContainingIgnoreCase(name,paging);


            restaurants = pageRestaurants.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("restaurants", restaurants);
            response.put("currentPage", pageRestaurants.getNumber());
            response.put("totalItems", pageRestaurants.getTotalElements());
            response.put("totalPages", pageRestaurants.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);
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
    public ResponseEntity<Map<String, Object>>getRestaurantsByType(@RequestParam String type,
                                                                   @RequestParam(defaultValue = "0") int page,
                                                                   @RequestParam(defaultValue = "4") int size) {
        try {
            List<Restaurant> restaurant = new ArrayList<Restaurant>();
            Pageable paging = PageRequest.of(page, size);
            Page<Restaurant> pageRestaurants;

            if (type == null){
                pageRestaurants = restaurantRepository.findAll(paging);
            }
            else
                pageRestaurants = restaurantRepository.findByTypeContaining(type,paging);

            restaurant = pageRestaurants.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("restaurants", restaurant);
            response.put("currentPage", pageRestaurants.getNumber());
            response.put("totalItems", pageRestaurants.getTotalElements());
            response.put("totalPages", pageRestaurants.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);

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

    @Override
    public ResponseEntity<Map<String, Object>> findByNameAndByType(@RequestParam(required = false) String name,
                                                                   @RequestParam(required = false) String type,
                                                                   @RequestParam(defaultValue = "0") int page,
                                                                   @RequestParam(defaultValue = "4") int size){
            try {
                System.out.println("AAA");
                List<Restaurant> restaurants= new ArrayList<Restaurant>();
                Pageable paging = PageRequest.of(page, size);
                Page<Restaurant> pageRestaurants;
                if (name == null && type == null)
                     pageRestaurants = restaurantRepository.findAll(paging);

                else
                    {if(name == null && type!=null){
                        pageRestaurants = restaurantRepository.findByTypeContaining(type,paging);
                    }
                    else{
                        if(name != null && type==null){
                            pageRestaurants = restaurantRepository.findByNameContainingIgnoreCase(name,paging);
                        }
                        else{
                            pageRestaurants = restaurantRepository.findByNameContainingIgnoreCaseAndTypeContaining(name,type,paging);
                        }

                    }
                    }

                restaurants = pageRestaurants.getContent();

                Map<String, Object> response = new HashMap<>();
                response.put("restaurants", restaurants);
                response.put("currentPage", pageRestaurants.getNumber());
                response.put("totalItems", pageRestaurants.getTotalElements());
                response.put("totalPages", pageRestaurants.getTotalPages());

                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            }

    }

    public List<String> findTypes(){
       return restaurantRepository.types();
    }
}
