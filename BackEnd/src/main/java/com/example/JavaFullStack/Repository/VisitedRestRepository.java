package com.example.JavaFullStack.Repository;


import com.example.JavaFullStack.Model.VisitedRest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VisitedRestRepository extends JpaRepository<VisitedRest, Integer> {
    @Query("select v from Restaurant r Join VisitedRest v on r.id=v.restaurant.id")
    public List<VisitedRest> getAllVisitedRest();
    @Query(value="delete  from visited_rest where id_restaurant=:idRestaurant and date=CURRENT_DATE returning id",nativeQuery = true)
    public Integer deleteByRestaurantId(Integer idRestaurant);
}