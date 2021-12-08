package com.revature.spring_java.models;

import com.revature.spring_java.services.MotivationService;

public class TrackCoach implements Coach {

    private final MotivationService motivationService;

    // Constructor injection (mandatory dependencies)
    public TrackCoach(MotivationService motivationService) {
        this.motivationService = motivationService;
    }

    @Override
    public String getDailyWorkout() {
        return "Today's workout: Run a 30-minute 5k.";
    }

    @Override
    public String getMotivation() {
        return "The track coach tells you: " + motivationService.provideMotivationalQuote();
    }

    @Override
    public MotivationService getMotivationService() {
        return motivationService;
    }

}
