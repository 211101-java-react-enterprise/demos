package com.revature.multithreaded_java.executors;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorDriver {

    public static void main(String[] args) {

        // Runnable Pattern: creating on-demand threads (very resource intensive) (introduced in Java v1)
        Thread t1 = new Thread(() -> {
            System.out.printf("%s says hello world!\n", Thread.currentThread().getName());
//            throw new RuntimeException("Catch me if you can.");
        });


        // Because each thread gets its own stack, any throwable thrown during one thread's
        // logic is unable to be caught and handled by another thread.
        try {
            t1.start();
        } catch (RuntimeException e) {
            System.out.println("Caught exception with message: " + e.getMessage());
        }

        /*
            1. A thread is created on demand...by some developer working on the app.
            2. Once the task is complete, the thread terminates and dies.
            3. Threads are expensive resources, and we should be able to reuse them!
            4. Runnable#run has no return value and cannot raise exceptions to be caught in other threads.
         */

        /*
            Executor Pattern (introduced in Java v5)

                - aims to improve the use of Java thread resources
                    + by allowing developers to create pools of ready-to-use thread objects
                    + Runnable tasks are given to existing threads in the pool
                    + threads remain in the pool even after the Runnable#run logic is complete

                - two patterns:
                    + create a pool of threads
                    + pass a task to a thread within the pool

                - Comparing Executor vs Runnable
                    + Executor pattern:
                        - executor.execute(runnableTask);

                    + Runnable pattern:
                        - new Thread(runnableTask);
         */

        ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();

        Runnable task_0 = () -> {
            // Make the thread sleep to simulate time passing
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("task_0 is running in thread: " + Thread.currentThread().getName());
        };

        Runnable task_1 = () -> System.out.printf("task_1 is running in %s\n", Thread.currentThread().getName());
        Runnable task_2 = () -> System.out.printf("task_2 is running in %s\n", Thread.currentThread().getName());

        // Creates three separate threads
//        new Thread(task_0).start();
//        new Thread(task_1).start();
//        new Thread(task_2).start();

        // Leverages a single thread exposed by an executor
        singleThreadExecutor.execute(task_0); // blocking call (code does not proceed until this is done)
        singleThreadExecutor.execute(task_1);
        singleThreadExecutor.execute(task_2);

        ExecutorService multiThreadExecutor = Executors.newFixedThreadPool(10);
        Runnable task_3 = () -> System.out.printf("task_3 is running in %s\n", Thread.currentThread().getName());
        Runnable task_4 = () -> System.out.printf("task_4 is running in %s\n", Thread.currentThread().getName());
        Runnable task_5 = () -> System.out.printf("task_5 is running in %s\n", Thread.currentThread().getName());
        Runnable task_6 = () -> System.out.printf("task_6 is running in %s\n", Thread.currentThread().getName());

        multiThreadExecutor.execute(task_3);
        multiThreadExecutor.execute(task_4);
        multiThreadExecutor.execute(task_5);
        multiThreadExecutor.execute(task_6);

        // The application will not halt until all active threads are terminated
        singleThreadExecutor.shutdown();
        multiThreadExecutor.shutdown();

    }

}
