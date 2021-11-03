package com.revature.java_basics.strings;

public class StringDriver {

    public static void main(String[] args) {

        String s1 = "Wezley"; //String Literals
        String s2 = "Wesley";

        boolean isEqual = (s1 == s2);
        System.out.println(isEqual);

        String s3 = "Wezley";
        isEqual = (s1 == s3);
        System.out.println(isEqual); // True because s1 and s3 point to the same object in memory

        String s4 = new String("Wezley");
        isEqual = (s1 == s4);
        System.out.println(isEqual); //False s4 is explicitly instantiated as a new String Object

        //== vs .equals()
        boolean isSameValue = (s1.equals(s4));
        System.out.println(isSameValue);

        // == checks memory equivalence
        // .equals() checks value equivalence

        //note it is very rare to need to check Strings for memory equivalence

        String s5 = "north";

        s5.concat("west");
        System.out.println(s5); // ? "north

        String s6 = s5.concat("west");
        System.out.println(s6); // northwest

        // Strings in java are IMMUTABLE. Once instantiated their value can never change.


        /*   Mutable Character Strings  */

        // StringBuilder or StringBuffer
            //StringBuilder is NOT thread safe but StringBuffer is.

        //Anything that is Immutable is thread safe.
        // StringBuilder builder = "doesn't work"; Cannot be done with string literals.
        StringBuilder builder = new StringBuilder("Wuzzah");
        builder.append(", ").append("it works!");

        String builtString = builder.toString();
        System.out.println(builtString);


    }
}
