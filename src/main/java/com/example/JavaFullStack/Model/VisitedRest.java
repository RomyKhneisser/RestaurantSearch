package com.example.JavaFullStack.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class VisitedRest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer id_person;
    private Integer id_restaurant;
    private Date date;

    public VisitedRest() { }

    public VisitedRest(Integer id_person, Integer id_restaurant, Date date) {
        this.id_person = id_person;
        this.id_restaurant = id_restaurant;
        this.date = date;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId_person() {
        return id_person;
    }

    public void setId_person(Integer id_person) {
        this.id_person = id_person;
    }

    public Integer getId_restaurant() {
        return id_restaurant;
    }

    public void setId_restaurant(Integer id_restaurant) {
        this.id_restaurant = id_restaurant;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "visitedrest{" +
                "id=" + id +
                ", id_person=" + id_person +
                ", id_restaurant=" + id_restaurant +
                ", date=" + date +
                '}';
    }
}
