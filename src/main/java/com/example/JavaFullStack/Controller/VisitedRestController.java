package com.example.JavaFullStack.Controller;

import com.example.JavaFullStack.Model.VisitedRest;
import com.example.JavaFullStack.Service.Impl.VisitedRestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class VisitedRestController {

    @Autowired
    VisitedRestServiceImpl visitedRestService;

    @GetMapping("/visitedrests")
    public ResponseEntity<List<VisitedRest>> getAllVisitedRests() {

        return visitedRestService.getAllVisitedRests();
    }

    @GetMapping("/visitedrests/{id}")
    public ResponseEntity<VisitedRest> getVisitedRestsById(@PathVariable("id") Integer id) {
        return visitedRestService.getVisitedRestsById(id);
    }

    @PostMapping("/visitedrests")
    public ResponseEntity<VisitedRest> createVisitedRest(@RequestBody VisitedRest visitedRest) {
        return visitedRestService.createVisitedRest(visitedRest);
    }

}
