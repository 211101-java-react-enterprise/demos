package com.revature.jank_unit;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME) // determines WHEN this annotation can be accessed (compilation time (SOURCE), class loading (CLASS), or RUNTIME)
@Target(ElementType.METHOD) // where can this annotation be applied (can go in one or more places) [FIELD, METHOD, TYPE, etc.]
public @interface Test {
}
