package com.revature.spring_java.models;

import com.revature.spring_java.services.MotivationService;

public class BaseballCoach implements Coach {

    private final MotivationService motivationService;

    public BaseballCoach(MotivationService motivationService) {
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
