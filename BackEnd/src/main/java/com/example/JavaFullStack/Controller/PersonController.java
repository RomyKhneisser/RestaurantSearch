package com.example.JavaFullStack.Controller;

import com.example.JavaFullStack.Model.Person;
import com.example.JavaFullStack.Service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class PersonController {

    @Autowired
    PersonService personService;

    @GetMapping("/persons")
    public ResponseEntity<List<Person>> getAllPersons() {
        return personService.getAllPersons();
    }

    @GetMapping("/persons/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable("id") Integer id) {
        return personService.getPersonById(id);
    }

    @PostMapping("/persons")
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        return personService.createPerson(person);
    }

}
