package com.example.JavaFullStack.Service;
import com.example.JavaFullStack.Model.VisitedRest;
import org.springframework.http.ResponseEntity;
import java.util.List;

public interface VisitedRestService {
    public List<VisitedRest> getAllVisitedRestaurants() ;
    public ResponseEntity<VisitedRest> getVisitedRestsById(Integer id);
    public ResponseEntity<VisitedRest> createVisitedRest(Integer idRestaurant);
    public ResponseEntity<Integer> deleteVisitedRest(Integer idRestaurant) ;
}

