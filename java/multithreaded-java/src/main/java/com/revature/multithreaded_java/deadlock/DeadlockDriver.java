package com.revature.multithreaded_java.deadlock;

public class DeadlockDriver {

    public static void main(String[] args) throws InterruptedException {

        Thread.sleep(5000);

        Deadlocker deadlocker = new Deadlocker();

        Runnable r1 = deadlocker::methodA;
        Thread t1 = new Thread(r1);
        t1.start();

        Runnable r2 = deadlocker::methodB;
        Thread t2 = new Thread(r2);
        t2.start();

    }

}
