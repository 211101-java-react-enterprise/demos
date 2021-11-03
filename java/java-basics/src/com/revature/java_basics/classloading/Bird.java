package com.revature.java_basics.classloading;

public class Bird {

    // non-static initialization blocks (runs before the constructor logic during object instantiation)
    {
        System.out.println("b1");
    }

    Bird() {
        System.out.println("b2");
    }

    // static initialization block (runs during classloading - before any object instantiation)
    // classloading (by default) only occurs once per class
    static {
        System.out.println("b3");
    }

}
