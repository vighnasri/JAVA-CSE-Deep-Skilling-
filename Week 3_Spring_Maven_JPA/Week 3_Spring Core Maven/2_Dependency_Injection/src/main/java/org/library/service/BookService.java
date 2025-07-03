package org.library.service;

import org.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // This setter enables Spring to inject the dependency
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }
}
