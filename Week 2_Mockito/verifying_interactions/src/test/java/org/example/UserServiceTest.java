package org.example;

import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class UserServiceTest {

    @Test
    void testGetUserNameById_Found() {
        // Arrange
        UserRepository mockRepo = mock(UserRepository.class);
        when(mockRepo.findById(1L)).thenReturn(Optional.of("Veda Sree"));

        Main app = new Main();

        // Act
        String result = app.getUserNameById(mockRepo, 1L);

        // Assert
        assertEquals("Veda Sree", result);
    }

    @Test
    void testGetUserNameById_NotFound() {
        // Arrange
        UserRepository mockRepo = mock(UserRepository.class);
        when(mockRepo.findById(99L)).thenReturn(Optional.empty());

        Main app = new Main();

        // Act
        String result = app.getUserNameById(mockRepo, 99L);

        // Assert
        assertEquals("Unknown User", result);
    }
}
