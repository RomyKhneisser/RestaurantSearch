package com.example.JavaFullStack.Service.Impl;

import com.example.JavaFullStack.Model.Person;
import com.example.JavaFullStack.Repository.PersonRepository;
import com.example.JavaFullStack.Service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    PersonRepository personRepository;

    public PersonServiceImpl() {
        super();
    }

    @Override
    public ResponseEntity<List<Person>> getAllPersons() {
        try {
            List<Person> person = new ArrayList<Person>();
            personRepository.findAll().forEach(person::add);
            return new ResponseEntity<>(person, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<Person> getPersonById(Integer id) {
        Optional<Person> personData = personRepository.findById(id);

        if (personData.isPresent()) {
            return new ResponseEntity<>(personData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<Person> createPerson(Person person) {
        try {

            Person newPerson = new Person(person.getUsername(), person.getPassword());
            personRepository.save(newPerson);
            return new ResponseEntity<>(newPerson, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
