package com.projetoimpacta.aptar.login;

import com.projetoimpacta.aptar.domain.Tecnico;
import com.projetoimpacta.aptar.repositories.TecnicoRepository;
import com.projetoimpacta.aptar.services.exceptions.DataIntegrityViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AuthController {

    @Autowired
    private TecnicoRepository usuarioRepository;

    @PostMapping("/login")
    public Optional<Tecnico> login(@RequestBody Tecnico usuario) {
        Optional<Tecnico> usuarioAutenticado = usuarioRepository.findByEmail(usuario.getEmail());
        if (usuarioAutenticado.isPresent()) {
            return usuarioAutenticado;
        } else {
            throw new DataIntegrityViolationException("usuario ou senha incorretos.");
        }
    }
}
