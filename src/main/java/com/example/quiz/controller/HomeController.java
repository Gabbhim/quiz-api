package com.example.quiz.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.net.URI;

@RestController
public class HomeController {

    @GetMapping("/")
    public Mono<Void> redirectToLogin(ServerHttpResponse response) {
        response.setStatusCode(HttpStatus.FOUND); // Código 302
        response.getHeaders().setLocation(URI.create("/login.html"));
        return Mono.empty();
    }
}
