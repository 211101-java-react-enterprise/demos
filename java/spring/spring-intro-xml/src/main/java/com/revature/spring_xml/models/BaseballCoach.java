package com.revature.spring_xml.models;

import com.revature.spring_xml.services.MotivationService;

public class BaseballCoach implements Coach {

    private final MotivationService motivationService;

    public BaseballCoach(MotivationService motivationService) {
        this.motivationService = motivationService;
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
