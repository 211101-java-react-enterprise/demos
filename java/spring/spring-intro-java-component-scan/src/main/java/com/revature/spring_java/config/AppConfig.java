package com.revature.spring_java.config;

import org.springframework.context.annotation.*;

// This class is used for the programmatic registration of beans within the Spring container (aka ApplicationContext)
@Configuration
@PropertySource("classpath:app.properties")
@ComponentScan("com.revature") // if no package string is provided, then Spring will scan this class's package
public class AppConfig {

    // What goes here now?

}
