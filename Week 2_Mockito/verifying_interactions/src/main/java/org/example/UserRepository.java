package org.example;

import java.util.Optional;

public interface UserRepository {
    Optional<String> findById(Long id);
}
