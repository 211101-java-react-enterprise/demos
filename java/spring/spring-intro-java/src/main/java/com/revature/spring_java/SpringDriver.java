package com.revature.spring_java;

import com.revature.spring_java.config.AppConfig;
import com.revature.spring_java.models.Coach;
import com.revature.spring_java.models.FootballCoach;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringDriver {

    public static void main(String[] args) {

        System.out.println("Creating the bean container...");

        try (AnnotationConfigApplicationContext beanContainer = new AnnotationConfigApplicationContext(AppConfig.class)) {

            System.out.println("Bean container created!");

            // Retrieve a bean from the contains with the name "myCoach"
            Coach headCoach = beanContainer.getBean("myCoach", Coach.class);

            // Call some methods on the retrieved bean to ensure it is configured properly
            System.out.println(headCoach.getDailyWorkout());
            System.out.println(headCoach.getMotivation());

            Coach assistantCoach = beanContainer.getBean("myCoach", Coach.class);
            System.out.println("Is the head coach the same as the assistant coach? :: " + (headCoach == assistantCoach));
            System.out.println("Do the coaches use the same motivationService? :: " + (headCoach.getMotivationService() == assistantCoach.getMotivationService()));

            //-------------------------------------------------------------------------

            FootballCoach footballCoach = beanContainer.getBean("footballCoach", FootballCoach.class);
            System.out.println(footballCoach.getDailyWorkout());
            System.out.println(footballCoach.getMotivation());
            System.out.println(footballCoach.getTeamName());
            System.out.println(footballCoach.getEmail());

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
