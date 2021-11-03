package com.revature.java_basics.classloading;

public class Bird {

    {
        System.out.println("b1");
    }

    Bird() {
        System.out.println("b2");
    }

    static {
        System.out.println("b3");
    }

}