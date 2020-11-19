package com.example.JavaFullStack.Service.Impl;

import com.example.JavaFullStack.Model.VisitedRest;
import com.example.JavaFullStack.Repository.VisitedRestRepository;
import com.example.JavaFullStack.Service.VisitedRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VisitedRestServiceImpl implements VisitedRestService {

    @Autowired
    VisitedRestRepository visitedRestRepository;

    @Override
    public ResponseEntity<List<VisitedRest>> getAllVisitedRests() {
        try {
            List<VisitedRest> visitedRest = new ArrayList<VisitedRest>();
            visitedRestRepository.findAll().forEach(visitedRest::add);
            return new ResponseEntity<>(visitedRest, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

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
    public ResponseEntity<VisitedRest> createVisitedRest(VisitedRest visitedRest) {
        try {

            VisitedRest newVisitedRest = new VisitedRest(visitedRest.getId_person(), visitedRest.getId_restaurant(), visitedRest.getDate());
            visitedRestRepository.save(newVisitedRest);
            return new ResponseEntity<>(newVisitedRest, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
