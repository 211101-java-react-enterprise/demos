package com.revature.jank_unit;

public class AssertionException extends RuntimeException {
    public AssertionException(String message) {
        super("Assertion condition not met!");
    }
}
