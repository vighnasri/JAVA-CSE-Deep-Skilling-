package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Optional;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    // Simulated business method to be tested
    public String getUserNameById(UserRepository userRepository, Long id) {
        return userRepository.findById(id).orElse("Unknown User");
    }
}
