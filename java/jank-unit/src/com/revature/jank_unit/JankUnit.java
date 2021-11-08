package com.revature.jank_unit;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class JankUnit {

    public static void main(String[] args) {

        System.out.println("Running tests...");
        int passed = 0, failed = 0;

        try {
            Class<?> testSuiteClass = Class.forName("com.revature.jank_unit.CalculatorTestSuite");

            for (Method classMethod : testSuiteClass.getMethods()) {
                if (classMethod.isAnnotationPresent(Test.class)) {
                    try {
                        classMethod.invoke(testSuiteClass.newInstance());
                        passed++;
                    } catch (AssertionException e) {
                        failed++;
                    }

                }
            }

        }

        // multi catch block (allows you to handle several unrelated exceptions in the same manner)
        catch (ClassNotFoundException | InstantiationException | IllegalAccessException | InvocationTargetException e) {
            failed++;
        }

        System.out.printf("Passed: %d, Failed: %d", passed, failed);

    }

    public static void assertThat(boolean condition) {
        if (!condition) {
            throw new AssertionException("Assertion condition not met!");
        }
    }

}
