package com.example.JavaFullStack.Controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//wasn't able to link html files with react application
//please run the application on react's port

@Controller
public class HomeController {
    @RequestMapping("/")
    public String home() {
        return "home";
    }

    @RequestMapping("/visitedRest")
    public String visitedRest() {
        return "visitedRest";
    }

}
