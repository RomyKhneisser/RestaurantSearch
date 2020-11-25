package com.example.JavaFullStack.Model;

import javassist.bytecode.ByteArray;

import javax.persistence.*;
import java.util.List;

@Entity
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;
    private String type;
    private float cost;
    private String address;
    private Integer phonenumber;

    @OneToMany(targetEntity = VisitedRest.class,cascade = CascadeType.ALL,mappedBy = "restaurant")
    private List<VisitedRest> visitedRest;


    public Restaurant() { }

    public Restaurant(String name, String type, float cost, String address, Integer phonenumber) {
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.address = address;
        this.phonenumber = phonenumber;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(Integer phonenumber) {
        this.phonenumber = phonenumber;
    }



    @Override
    public String toString() {
        return "restaurant{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", cost=" + cost +
                ", address='" + address + '\'' +
                ", phonenumber=" + phonenumber +
                '}';
    }
}
