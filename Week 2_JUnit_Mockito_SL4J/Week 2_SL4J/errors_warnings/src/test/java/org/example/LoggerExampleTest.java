package org.example;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerExampleTest {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    @Test
    public void logMessages() {
        logger.error("This is an error message");
        logger.warn("This is a warning message");
    }

    public static void main(String[] args) {
        new LoggerExampleTest().logMessages();
    }
}
