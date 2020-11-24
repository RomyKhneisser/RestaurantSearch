package com.example.JavaFullStack.Repository;


import com.example.JavaFullStack.Model.VisitedRest;
import com.example.JavaFullStack.Model.VisitedRestDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitedRestRepository extends JpaRepository<VisitedRest, Integer> {
//    @Query(value="select visited_rest.id,name,date from visited_rest,restaurant where restaurant.id=visited_rest.id_restaurant;",nativeQuery = true)
//    public List<VisitedRestDto> getAllVisitedRest();
}