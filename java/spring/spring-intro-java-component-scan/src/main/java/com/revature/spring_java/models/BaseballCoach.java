package com.revature.spring_java.models;

import com.revature.spring_java.services.MotivationService;
import com.revature.spring_java.services.SportMotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Scope("prototype")
@Component("myCoach") // the component/bean name by default is the class name in camelCase
public class BaseballCoach implements Coach {

    private final MotivationService motivationService;

    @Autowired // for constructor injection, this annotation isn't technically required
    public BaseballCoach(SportMotivationService motivationService) { // autowiring by type
        System.out.println("BaseballCoach#<init> invoked!");
        this.motivationService = motivationService;
    }

    @Override
    public MotivationService getMotivationService() {
        return motivationService;
    }

    @Override
    public String getDailyWorkout() {
        return "Today's workout: Spend an hour on batting practice.";
    }

    @Override
    public String getMotivation() {
        return "The baseball tells you: " + motivationService.provideMotivationalQuote();
    }

}
