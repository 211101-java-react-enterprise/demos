package com.revature.spring_java.models;

import com.revature.spring_java.services.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Component
public class FootballCoach implements Coach {

    @Value("${coach-email}") // Spring Expression Language (SpEL)
    private String email;

    @Value("#{12 * 2}") // Spring Expression Language (SpEL)
    private int teamSize;

    @Value("Spring Sprouts")
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

    public int getTeamSize() {
        return teamSize;
    }

    public void setTeamSize(int teamSize) {
        this.teamSize = teamSize;
    }

    @Override
    public MotivationService getMotivationService() {
        return motivationService;
    }

    @Autowired // required here since we are using setter based injection
    public void setMotivationService(MotivationService motivationService) {
        System.out.println("FootballCoach#setMotivationService invoked!");
        this.motivationService = motivationService;
    }

    @PostConstruct // J2EE annotation equivalent to setting an init-method for this bean
    public void customInit() {
        System.out.println("FootballCoach#customInit invoked!");
    }

    @PreDestroy // J2EE annotation equivalent to setting a destroy-method for this bean
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
