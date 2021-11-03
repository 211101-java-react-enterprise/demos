package com.revature.java_basics.strings;

import java.util.ArrayList;

public class StringDriver {

    public static void main(String[] args) {

        String s1 = "Wezley"; // characters encapsulated within double quotes are known as "string literals"
        String s2 = "Wesley";
        boolean isEqual = (s1 == s2);
        System.out.println(isEqual);

        String s3 = "Wezley";
        isEqual = (s1 == s3);
        System.out.println(isEqual); // true, because s1 and s3 both point to the same String object in memory

        String s4 = new String("Wezley");
        isEqual = (s1 == s4);
        System.out.println(isEqual); // false, because s4 is explicitly instantiated as a new String object

        // == vs .equals()
        boolean isSameValue = (s1.equals(s4));
        System.out.println(isSameValue);

        // == is used to check for memory equivalence (references points to the same object in memory)
        // .equals() is used to check for value equivalence

        // Note: it is very rare to need to check Strings for memory equivalence

        String s5 = "north";
        s5.concat("west");
        System.out.println(s5); // "north"

        s5 = s5.concat("west");
        System.out.println(s5); // "northwest"

        // Strings in Java are IMMUTABLE. Once instantiated, their value can NEVER change
        // In order to "change" the value of a String you actually need to simply make a new String with the
        // desired value.


        //------------------------------------

        // But what if I want mutable character streams (aka "strings")?

        // Use: StringBuilder or StringBuffer
            // Key difference: StringBuilder is NOT thread safe, whereas StringBuffer is thread safe

        // Strings are implicitly thread safe due to their immutability

//        StringBuilder builder = "doesn't work"; // StringBuilders cannot be instantiated using string literals
        StringBuilder builder = new StringBuilder("Huzzah");

        builder.append(", ")
               .append("it works!");

        String builtString = builder.toString();
        System.out.println(builtString);

        System.out.println(builder); // System.out.println (implicitly calls the .toString() method)


    }

}
