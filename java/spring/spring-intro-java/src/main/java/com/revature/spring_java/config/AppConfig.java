package com.revature.spring_java.config;

import com.revature.spring_java.models.BaseballCoach;
import com.revature.spring_java.models.Coach;
import com.revature.spring_java.models.FootballCoach;
import com.revature.spring_java.services.MotivationService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

// This class is used for the programmatic registration of beans within the Spring container (aka ApplicationContext)
@Configuration
@PropertySource("classpath:app.properties")
public class AppConfig {

    @Value("${coach-email}")
    private String coachEmail;

    @Bean
    // name of method = bean id
    public MotivationService motivationService() {
        return new MotivationService();
    }

    @Bean("myCoach")
    @Scope("prototype")
    public Coach someCoach() {
        return new BaseballCoach(motivationService()); // constructor injection (manual bean wiring)
    }

    @Bean(initMethod = "customInit", destroyMethod = "customDestroy")
    public FootballCoach footballCoach() {
        FootballCoach footballCoach = new FootballCoach();
        footballCoach.setMotivationService(motivationService()); // setter injection (manual bean wiring)
        footballCoach.setTeamName("Spring Sprouts");
        footballCoach.setEmail(coachEmail);
        return footballCoach;
    }

}
