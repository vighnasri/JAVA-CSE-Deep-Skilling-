package org.library.main;

import org.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the service bean (with BookRepository injected)
        BookService bookService = (BookService) context.getBean("bookService");

        // Test dependency injection
        bookService.addBook("Dependency Injection in Spring");
    }
}
