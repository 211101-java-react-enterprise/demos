package com.revature.java_basics.classloading;

public class Bird {
    static {
        System.out.println("b3");
    }
    {
        System.out.println("b1");
    }
    Bird() {
        System.out.println("b2");
    }
}