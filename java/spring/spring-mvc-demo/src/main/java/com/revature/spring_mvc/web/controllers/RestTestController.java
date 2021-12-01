package com.revature.spring_mvc.web.controllers;

import com.revature.spring_mvc.web.dtos.LoginRequest;
import com.revature.spring_mvc.web.dtos.LoginSuccessResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController // implies @Controller at the class-level, and @ResponseBody for all method return types
@RequestMapping("/rest-test")
public class RestTestController {

    @PostMapping(value = "/login", consumes = "application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginSuccessResponse test9(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest);
        return new LoginSuccessResponse(loginRequest.getUsername(), "Bearer jin4ru892fhn4f892=iu2rh8234");
    }

}
