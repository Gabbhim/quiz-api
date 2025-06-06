package com.example.quiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // garante o component-scan automático de subpacotes
public class QuizApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(QuizApiApplication.class, args);
    }
}
