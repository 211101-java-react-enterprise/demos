package com.revature.spring_java.models;

import com.revature.spring_java.services.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class CodeCoach implements Coach {

    private MotivationService motivationService;

    @Autowired
    public void setMotivationService(MotivationService motivationService) {
        this.motivationService = motivationService;
    }

    @Override
    public String getDailyWorkout() {
        return "Spend at least 45 minutes on a medium level HackerRank or LeetCode.";
    }

    @Override
    public String getMotivation() {
        return "The code coach tells you: " + motivationService.provideMotivationalQuote();
    }

    @Override
    public MotivationService getMotivationService() {
        return motivationService;
    }
}
