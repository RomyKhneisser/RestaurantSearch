package com.example.JavaFullStack.Repository;

import com.example.JavaFullStack.Model.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {

    Page<Restaurant> findByNameContainingIgnoreCase(String name, Pageable pageable);
    Page <Restaurant> findByTypeContaining(String type, Pageable pageable);
    Page<Restaurant> findByNameContainingIgnoreCaseAndTypeContaining(String name, String type, Pageable pageable);
    public static final String findTypes = "SELECT DISTINCT type FROM restaurant";
    @Query(value=findTypes, nativeQuery=true)
     List<String> types();
}

