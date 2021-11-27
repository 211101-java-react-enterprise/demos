package com.revature.multithreaded_java.runnable;

public class MyRunnable implements Runnable {
    @Override
    public void run() {
        Thread.currentThread().setName("MyRunnableThread");
        System.out.println(Thread.currentThread().getName() + " started!");

        for (int i = 0; i < 10; i++) {
            System.out.println("i = " + i);
        }

        System.out.println(Thread.currentThread().getName() + " ended!");
    }
}
