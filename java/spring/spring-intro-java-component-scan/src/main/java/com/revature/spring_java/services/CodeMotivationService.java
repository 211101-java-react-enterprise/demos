package com.revature.spring_java.services;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Qualifier("code")
//@Primary
public class CodeMotivationService implements MotivationService {
    @Override
    public String provideMotivationalQuote() {
        return "Don't quit. Suffer now and code the rest of your life like a boss. - Someone at Revature, I'm sure...";
    }
}
