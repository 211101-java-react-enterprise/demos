package com.revature.spring_mvc;

import com.revature.spring_mvc.exceptions.InvalidRequestException;
import com.revature.spring_mvc.web.dtos.LoginSuccessResponse;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public LoginSuccessResponse login(String username, String password) {

        if (username == null || username.equals("") || password == null || password.equals("")) {
            throw new InvalidRequestException("Illegal login credentials provided!");
        }

        return new LoginSuccessResponse(username, "Bearer randomtokenvaluehere");

    }
}
