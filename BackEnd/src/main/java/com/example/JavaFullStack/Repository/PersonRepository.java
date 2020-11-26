package com.example.JavaFullStack.Repository;

import com.example.JavaFullStack.Model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer> { }
