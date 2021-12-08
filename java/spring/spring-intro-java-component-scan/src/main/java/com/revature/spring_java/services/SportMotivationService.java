package com.revature.spring_java.services;

import org.springframework.stereotype.Service;

@Service
public class SportMotivationService implements MotivationService {

    @Override
    public String provideMotivationalQuote() {
        return "Don't quit. Suffer now and live the rest of your life like a champion. - Muhammad Ali";
    }

}
