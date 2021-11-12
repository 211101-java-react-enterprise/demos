package com.revature.java_basics.classloading;

public class Penguin extends Bird {

    static {
        System.out.println("p1");
    }

    {
        System.out.println("p2");
    }

}