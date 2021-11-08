package com.revature.jank_unit;

public class CalculatorTestSuite {

    Calculator sut = new Calculator(); // sut = System Under Test

    @Test
    public void test_add_returnsCorrectAnswer() {
        int expected = 4;
        int actual = sut.add(2, 2);
        JankUnit.assertThat(actual == expected);
    }

    @Test
    public void test_add_withNegatives() {
        int expected = -5;
        int actual = sut.add(0, -5);
        JankUnit.assertThat(actual == expected);
    }

    @Test
    public void test_failsOnPurpose() {
        int expected = 0;
        int actual = sut.add(1, 1);
        JankUnit.assertThat(actual == expected);
    }

}
