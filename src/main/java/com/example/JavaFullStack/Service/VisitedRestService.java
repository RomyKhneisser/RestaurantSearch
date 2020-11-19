package com.example.JavaFullStack.Service;


import com.example.JavaFullStack.Model.VisitedRest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


public interface VisitedRestService {
    public ResponseEntity<List<VisitedRest>> getAllVisitedRests();
    public ResponseEntity<VisitedRest> getVisitedRestsById(@PathVariable("id") Integer id);
    public ResponseEntity<VisitedRest> createVisitedRest(@RequestBody VisitedRest visitedrest);
}

