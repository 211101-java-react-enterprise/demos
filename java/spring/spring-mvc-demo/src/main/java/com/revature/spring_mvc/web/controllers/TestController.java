package com.revature.spring_mvc.web.controllers;

import com.revature.spring_mvc.web.dtos.LoginRequest;
import com.revature.spring_mvc.web.dtos.LoginSuccessResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/test")
public class TestController {

    @RequestMapping(method = RequestMethod.GET, value = "/test1")
    public @ResponseBody String test1() {
        return "/spring-mvc-demo/test/test1 works!";
    }

    @GetMapping("/test2")
    public @ResponseBody String test2() {
        return "/spring-mvc-demo/test/test2 works!";
    }

    @GetMapping("/test3")
    public @ResponseBody String test3(@RequestParam String someValue, @RequestParam(value = "anotherValue", required = false) String whatever) {
        return "/spring-mvc-demo/test/test3 works! Provided values: " + someValue + " and " + whatever;
    }

    @GetMapping("/test4/{someValue}/{anotherValue}")
    public @ResponseBody String test4(@PathVariable String someValue, @PathVariable("anotherValue") String whatever) {
        return "/spring-mvc-demo/test/test4 works! Provided values: " + someValue + " and " + whatever;
    }

    @GetMapping("/test5")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void test5() {
        System.out.println("This will not be returned to the requester, but just printed to web server output.");
    }

    @GetMapping("/test6")
    public ResponseEntity<String> test6(@RequestParam boolean brewCoffee) {

        if (brewCoffee) {
            return new ResponseEntity<>("Coffee brewed", HttpStatus.OK);
        }

        return new ResponseEntity<>("Did not brew coffee", HttpStatus.I_AM_A_TEAPOT);
    }

    @GetMapping("/test7")
    public @ResponseBody String test7(HttpServletResponse resp) {
        resp.setStatus(206);
        resp.addHeader("custom-header", "custom-value");
        return "/spring-mvc-demo/test/test7 works!";
    }

    @GetMapping("/test8")
    public @ResponseBody String test8(@RequestHeader(required = false) String someHeader) {
        return "/spring-mvc-demo/test/test8 works! Provided header value: " + someHeader;
    }

    @PostMapping(value = "/test9", consumes = "application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody LoginSuccessResponse test9(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest);
        return new LoginSuccessResponse(loginRequest.getUsername(), "Bearer jin4ru892fhn4f892=iu2rh8234");
    }

    @GetMapping("/test10")
    public void test10() {
        System.out.println("/test10 endpoint hit!");
        throw new RuntimeException("Thrown on purpose for demo");
    }

    @GetMapping("/test11")
    public void test11() {
        throw new Error("Another one."); // not caught and handled by the exception handlers we've declared
    }

    @GetMapping("/test12")
    public void test12() {
        throw new NullPointerException("Something more granular"); // handled by the declared exception handler since a NPE is a RE.
    }

    @GetMapping("/test13")
    public void test13() {
        throw new ArrayIndexOutOfBoundsException("Test."); // handled by the declared exception handler since a NPE is a RE.
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public void handleRuntimeException(RuntimeException e) {
        System.out.println("Caught exception in controller with message: " + e.getMessage());
    }

    @ExceptionHandler({ArithmeticException.class, ArrayIndexOutOfBoundsException.class })
    @ResponseStatus(HttpStatus.SERVICE_UNAVAILABLE)
    public void handleSomeExceptions(Exception e) {
        System.out.println("Caught more exceptions in controller with message: " + e.getMessage());
    }


}
