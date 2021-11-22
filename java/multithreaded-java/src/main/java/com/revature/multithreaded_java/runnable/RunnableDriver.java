package com.revature.multithreaded_java.runnable;

public class RunnableDriver {

    public static void main(String[] args) {

        System.out.println(Thread.currentThread().getName() + " started!");

        MyRunnable myRunnable = new MyRunnable();
        Thread t1 = new Thread(myRunnable);

//        t1.run(); // does not execute the Runnable.run logic on a separate thread (uses the current)
        t1.start();

        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                Thread.currentThread().setName("AnonymousRunnable");
                System.out.println(Thread.currentThread().getName() + " started!");

                for (char j = 'a'; j < 'h'; j++) {
                    System.out.println("j = " + j);
                }

                System.out.println(Thread.currentThread().getName() + " ended!");
            }
        });

        t2.start();

        Thread t3 = new Thread(() -> {
            Thread.currentThread().setName("LambdaRunnable");
            System.out.println(Thread.currentThread().getName() + " started!");

            for (char k = 'z'; k > 'l'; k--) {
                System.out.println("k = " + k);
            }

            System.out.println(Thread.currentThread().getName() + " ended!");
        });

        t3.start();

        System.out.println(Thread.currentThread().getName() + " ended!");
    }

}
