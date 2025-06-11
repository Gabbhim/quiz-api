package com.example.quiz.controller;

import com.example.quiz.model.Usuario;
import com.example.quiz.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // (opcional) permite chamadas do navegador
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/register")
    public Mono<String> register(@RequestBody Usuario usuario) {
        return usuarioRepository.findByEmail(usuario.getEmail())
                .flatMap(ignored -> Mono.just("Email já cadastrado!"))
                .switchIfEmpty(usuarioRepository.save(usuario).thenReturn("Cadastro realizado com sucesso!"));
    }

    @PostMapping("/login")
    public Mono<String> login(@RequestBody Usuario usuario) {
        return usuarioRepository.findByEmail(usuario.getEmail())
                .flatMap(existing -> {
                    if (existing.getSenha().equals(usuario.getSenha())) {
                        return Mono.just("Login bem-sucedido!");
                    } else {
                        return Mono.just("Senha incorreta.");
                    }
                })
                .switchIfEmpty(Mono.just("Usuário não encontrado."));
    }
}
