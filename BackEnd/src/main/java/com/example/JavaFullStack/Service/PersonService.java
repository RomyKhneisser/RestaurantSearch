package com.example.JavaFullStack.Service;

import com.example.JavaFullStack.Model.Person;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface PersonService {
    public ResponseEntity<List<Person>> getAllPersons();
    public ResponseEntity<Person> getPersonById(@PathVariable("id") Integer id);
    public ResponseEntity<Person> createPerson(@RequestBody Person person);

}
