package com.example.JavaFullStack.Service.Impl;
import com.example.JavaFullStack.Model.Restaurant;
import com.example.JavaFullStack.Model.VisitedRest;
import com.example.JavaFullStack.Repository.RestaurantRepository;
import com.example.JavaFullStack.Repository.VisitedRestRepository;
import com.example.JavaFullStack.Service.VisitedRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class VisitedRestServiceImpl implements VisitedRestService {

    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    VisitedRestRepository visitedRestRepository;

    @Override
    public ResponseEntity<VisitedRest> getVisitedRestsById(Integer id) {
        Optional<VisitedRest> visitedRestData= visitedRestRepository.findById(id);

        if (visitedRestData.isPresent()) {
            return new ResponseEntity<>(visitedRestData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<VisitedRest> createVisitedRest(Integer idRestaurant) {
        try {
            Optional<Restaurant> restaurant = restaurantRepository.findById(idRestaurant);
            VisitedRest newVisitedRest = new VisitedRest(restaurant.get());
            visitedRestRepository.save(newVisitedRest);
            return new ResponseEntity<>(newVisitedRest, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Override
    public List<VisitedRest> getAllVisitedRestaurants() {
        try {
            return visitedRestRepository.getAllVisitedRest();
        } catch (Exception e) {
            return null;
        }
    }

    public ResponseEntity<Integer> deleteVisitedRest(Integer idRestaurant) {
        try {
           Integer i= visitedRestRepository.deleteByRestaurantId(idRestaurant);
            return new ResponseEntity<>(i,HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
