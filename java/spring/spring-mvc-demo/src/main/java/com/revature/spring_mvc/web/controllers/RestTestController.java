package com.revature.spring_mvc.web.controllers;

import com.revature.spring_mvc.UserService;
import com.revature.spring_mvc.web.dtos.LoginRequest;
import com.revature.spring_mvc.web.dtos.LoginSuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // implies @Controller at the class-level, and @ResponseBody for all method return types
@RequestMapping("/rest-test")
public class RestTestController {

    private final UserService userService;

    @Autowired
    public RestTestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/login", consumes = "application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginSuccessResponse test9(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest);
        return userService.login(loginRequest.getUsername(), loginRequest.getPassword());
    }

}
