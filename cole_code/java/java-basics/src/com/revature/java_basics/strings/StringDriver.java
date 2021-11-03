package com.revature.java_basics.strings;

public class StringDriver {
    public static void main(String[] args) {
        String s1 = "Paris"; //characters encapsulated withing double quotes are known as string literals
        String s2 = "Parris";
        String s3 = "Paris";
        boolean isEqual = s1 == s3;


        System.out.println(isEqual);

        String s4 = new String("Paris");
        System.out.println(isEqual);// false, because s4 is explicitly instantiated as a new String object
        //stringbuilder not threadsafe, stringbuffer is threadsafe
        //anything that is immutable (unable to change) is threadsafe
        //double equals is used to check for memory equivilence, .equals is used to check for value equivilance
    }
}
