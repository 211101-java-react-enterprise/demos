package com.revature.collection_demo;

import java.util.*;
import java.util.function.*;
import java.util.stream.Collectors;

public class Driver {

    public static void main(String[] args) {
        LinkedList<String> myList = new LinkedList<>();
        for (int i = 0; i < 5; i++) {
            myList.add("value-" + i);
        }

        System.out.println(myList);

        Iterator<String> linkedListIterator = myList.iterator();
        while (linkedListIterator.hasNext()) {
            System.out.println(linkedListIterator.next());
        }

        System.out.println(myList);
        // Only objects that implement Iterable can be used in a for-each loop


        System.out.println("+-----------------------------------+");
        Set<String> stringSet = new HashSet<>();
        stringSet.add("value-1");
        stringSet.add("value-2");
        stringSet.add("value-3");
        stringSet.add("value-4");
        stringSet.add("value-3");
        // No way to access set elements externally without using an iterator
//        for (int i = 0; i < stringSet.size(); i++) {
//            System.out.println(stringSet.);
//        }

        Iterator<String> setIterator = stringSet.iterator();
        System.out.println(setIterator.next());
        System.out.println(setIterator.next());
        System.out.println(setIterator.next());
        System.out.println(setIterator.next());

        System.out.println("+-----------------------------------------------+");
        for (String s : stringSet) {
            System.out.println(s);
        }

        System.out.println("+-----------------------------------------------+");
        // Set that maintains order
        Set<String> mySet = new TreeSet<>();
        mySet.add("value-0");
        mySet.add("value-1");
        mySet.add("value-2");
        mySet.add("value-3");
        mySet.add("value-4");
        for (String s : mySet) {
            System.out.println(s);
        }

        System.out.println("+-------------------------------------------------+");

        // Associative Array
        Map<Integer, String> myMap = new HashMap<>();
        myMap.put(1, "value-1");
        myMap.put(2, "value-2");
        myMap.put(3, "value-3");
        myMap.put(1, "value-4"); // overwrites the previously associated key's value
        myMap.put(4, "value-4");
        myMap.put(5, null);
        myMap.put(6, null);
        myMap.put(null, "something");
        myMap.put(null, "something else");
        System.out.println(myMap);

        // Since we cannot iterate over a Map, we instead convert it into an Iterable type
        Set<Map.Entry<Integer, String>> entrySet =  myMap.entrySet();
        for (Map.Entry<Integer, String> entry : entrySet) {
            System.out.println(entry);
        }

        System.out.println("+------------------------------------------+");

        // Streams
        ArrayList<String> myStringList = new ArrayList<>();
        myStringList.add("Wezley");
        myStringList.add("Blake");
        myStringList.add("Trevin");
        myStringList.add("Nick");
        myStringList.add("Matt");
        myStringList.add("Michael");
        myStringList.add("Emily");

        for (int i = 0; i < myStringList.size(); i++) {
            System.out.println(myStringList.get(i));
        }

        System.out.println("+-----------------------+");

        for (String s : myStringList) {
            System.out.println(s);
        }

        System.out.println("+-----------------------+");

        // Local Anonymous Class
        myStringList.forEach(new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        });

        System.out.println("+-----------------------+");

        // Using a Lambda Expression
        // Lambda Expression = the inline implementation of a functional interface's one abstract method
        myStringList.forEach(s -> System.out.println(s));

        System.out.println("+-----------------------+");

        // Using a Method Reference
        // Only works if you have a one-liner lambda
        myStringList.forEach(System.out::println);

        System.out.println("+-----------------------+");

        class Trainer {
            String name;
            public Trainer(String name) {
                this.name = name;
            }

            @Override
            public String toString() {
                return "Trainer{" +
                        "name='" + name + '\'' +
                        '}';
            }
        }

        // Imperative logic
        for (String s : myStringList) {
            if (s.startsWith("M")) {
                Trainer t = new Trainer(s);
                System.out.println(t);
            }
        }

        class StartsWithM implements Predicate<String> {
            @Override
            public boolean test(String s) {
                return s.startsWith("M");
            }
        }

        System.out.println("+-------------------------------------+");
        System.out.println("+-------------------------------------+");

        // Pre Java 8
        myStringList.stream()
                    .filter(new StartsWithM())
                    .map(new Function<String, Trainer>() {
                        @Override
                        public Trainer apply(String trainerNameString) {
                            return new Trainer(trainerNameString);
                        }
                    })
                    .forEach(new Consumer<Trainer>() {
                        @Override
                        public void accept(Trainer trainer) {
                            System.out.println(trainer);
                        }
                    });

        System.out.println("+-------------------------------------+");

        // Declarative logic
        myStringList.stream()
                    .filter(s -> s.startsWith("M"))
                    .map(Trainer::new)
                    .forEach(System.out::println);

        System.out.println("+-------------------------------------+");

        // Declarative logic
        List<Trainer> trainers = myStringList.stream()
                                             .filter(s -> s.startsWith("M"))
                                             .map(Trainer::new)
                                             .collect(Collectors.toList());

        for (Trainer trainer : trainers) {
            System.out.println(trainer);
        }

        System.out.println("+-------------------------------------+");

        // The List created by Arrays.asList(Object...) is IMMUTABLE
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
//        nums.remove(3); // throws UnsupportedOperationException since the list is immutable

        // the Integer returned by .reduce is being "unboxed" into a primitive int
        int sumOfEvens = nums.stream()
                             .filter(num -> num % 2 == 0)

                             //      |- starting point and accumulator (boxing occurs here, providing a primitive int that will be "boxed" into an Integer)
                             //      |
                             //      |      |----value of accumulator as we iterator through the collection
                             //      |      |
                             //      |      |       |---- current number
                             //      |      |       |
                             //      |      |       |            |-----operation to change the accumulator
                             .reduce(0, (subTotal, num) -> subTotal + num);

        // If we want to avoid unnecessary boxing and unboxing of primitives/Wrappers then
        // we do have primitive specializations of the java.util.function interfaces
        // such as:
        IntPredicate intPredicate;
        DoublePredicate doublePredicate;
        IntSupplier intSupplier;
        LongConsumer longConsumer;
        IntToLongFunction intToLongFunction;
        Predicate<Integer> integerPredicate;

        System.out.println(sumOfEvens);
    }
}
