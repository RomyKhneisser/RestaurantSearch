package com.example.JavaFullStack.Controller;
import com.example.JavaFullStack.Model.VisitedRest;
import com.example.JavaFullStack.Service.VisitedRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class VisitedRestController {

    @Autowired
    VisitedRestService visitedRestService;

    @GetMapping("/visitedrests")
    public List<VisitedRest>getAllVisitedRests() {
        return visitedRestService.getAllVisitedRestaurants();
    }

    @GetMapping("/visitedrests/{id}")
    public ResponseEntity<VisitedRest> getVisitedRestsById(@PathVariable("id") Integer id) {
        return visitedRestService.getVisitedRestsById(id);
    }

    @PostMapping("/visitedrests/{id}")
    public ResponseEntity<VisitedRest> createVisitedRest(@PathVariable("id") Integer idRestaurant) {
        return visitedRestService.createVisitedRest(idRestaurant);
    }

    @DeleteMapping("/visitedrests/{id}")
    public ResponseEntity<Integer> deleteVisitedRest(@PathVariable("id") Integer idRestaurant) {
      return visitedRestService.deleteVisitedRest(idRestaurant);
    }
}
