package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Main calculator;

    // Setup method (runs before every test)
    @Before
    public void setUp() {
        System.out.println("Setting up Calculator object...");
        calculator = new Main();
    }

    // Teardown method (runs after every test)
    @After
    public void tearDown() {
        System.out.println("Tearing down Calculator object...");
        calculator = null;
    }

    @Test
    public void testAdd_PositiveNumbers() {
        // Arrange
        int a = 2;
        int b = 3;

        // Act
        int result = calculator.add(a, b);
        int r=calculator.subtract(a,b);

        // Assert
        assertEquals(5, result);
        assertEquals(-1,r);
    }

    @Test
    public void testAdd_NegativeNumbers() {
        // Arrange
        int a = -4;
        int b = -6;

        // Act
        int result = calculator.add(a, b);
        int r=calculator.subtract(a,b);

        // Assert
        assertEquals(-10, result);
        assertEquals(2,r);
    }
}
