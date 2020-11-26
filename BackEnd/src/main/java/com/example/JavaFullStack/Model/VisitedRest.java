package com.example.JavaFullStack.Model;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;

import java.util.Date;

@Entity
public class VisitedRest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @JsonFormat(pattern="MMMMM dd, yyyy",timezone="GMT+2")
    private Date date;

    @ManyToOne
    @JoinColumn(name="id_restaurant")
    private Restaurant restaurant;

    public VisitedRest() {
    }

    public VisitedRest( Restaurant restaurant) {
        this.restaurant = restaurant;
        this.date = new Date();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date =date;
    }

    public Restaurant getRestaurant() {

        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    @Override
    public String toString() {
        return "VisitedRest{" +
                "id=" + id +
                ", date=" + date +
                ", restaurant=" + restaurant +
                '}';
    }
}

