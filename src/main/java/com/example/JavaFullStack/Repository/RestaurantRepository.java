package com.example.JavaFullStack.Repository;

import com.example.JavaFullStack.Model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    List<Restaurant> findByName(String name);
    List<Restaurant> findByType(String type);
}

