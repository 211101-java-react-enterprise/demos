package com.revature.multithreaded_java.deadlock;

public class Deadlocker {

    // Use separate monitors to lock blocks of code rather than entire methods
    private final Object monitorA = new Object();
    private final Object monitorB = new Object();

    public void methodA() {
        synchronized (monitorA) {
            System.out.printf("[%s] is running inside of methodA()\n", Thread.currentThread().getName());
            methodB();
        }
        // other logic outside of the synchronized b
    }

    public void methodB() {
        synchronized (monitorB) {
            System.out.printf("[%s] is running inside of methodB()\n", Thread.currentThread().getName());
            methodC();
        }
    }

    public void methodC() {
        synchronized (monitorA) {
            System.out.printf("[%s] is running inside of methodC()\n", Thread.currentThread().getName());
        }
    }

    // Instance Method
    // The monitor object holding the key (mutex lock) to this method is an instance of Deadlocker!
    public synchronized void methodD() {

    }

    // Class Method
    // The monitor object holding the key to this method is the class Deadlocker
    // Remember that the JVM loads Class objects onto the heap for each class in your app
    public static synchronized void methodE() {

    }

}
