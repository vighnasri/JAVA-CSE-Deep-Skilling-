package org.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Main calc = new Main();
        assertEquals(5, calc.add(2, 3));
    }
}
