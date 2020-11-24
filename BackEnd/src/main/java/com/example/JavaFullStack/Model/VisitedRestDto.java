package com.example.JavaFullStack.Model;

import java.util.Date;

public class VisitedRestDto {

    private Integer id;
    private String name;
    private Date date;

    public VisitedRestDto() { }

    public VisitedRestDto(Integer id, String name, Date date) {
        this.id = id;
        this.name = name;
        this.date = date;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
