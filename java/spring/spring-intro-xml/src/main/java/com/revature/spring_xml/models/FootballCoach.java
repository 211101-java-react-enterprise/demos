package com.revature.spring_xml.models;

import com.revature.spring_xml.services.MotivationService;

public class FootballCoach implements Coach {

    private String email;
    private String teamName;
    private MotivationService motivationService;

    public FootballCoach() {
        System.out.println("FootballCoach#<init> invoked!");
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        System.out.println("FootballCoach#setEmail invoked!");
        this.email = email;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        System.out.println("FootballCoach#setTeamName invoked!");
        this.teamName = teamName;
    }

    @Override
    public MotivationService getMotivationService() {
        return motivationService;
    }

    // Setter based injection (optional dependencies)
    public void setMotivationService(MotivationService motivationService) {
        System.out.println("FootballCoach#setMotivationService invoked!");
        this.motivationService = motivationService;
    }

    public void customInit() {
        System.out.println("FootballCoach#customInit invoked!");
    }

    public void customDestroy() {
        System.out.println("FootballCoach#customDestroy invoked!");
    }

    @Override
    public String getDailyWorkout() {
        return "Today's workout: Suicide runs to the 40, 50, 60, 70, 80, and 100 yard lines.";
    }

    @Override
    public String getMotivation() {

        if (motivationService == null) {
            return "Sorry no motivation give today. Try again later.";
        }

        return "The football coach tells you: " + motivationService.provideMotivationalQuote();

    }

}
