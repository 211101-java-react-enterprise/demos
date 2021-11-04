package com.revature.java_basics.classloading;

public class Raptor extends Bird {
    static {
        System.out.println("r1");
    }
    static {
        System.out.println("r4");
    }
    {
        System.out.println("r5");
    }
    {
        System.out.println("r3");
    }
    Raptor() {
        System.out.println("r2");
    }
}
