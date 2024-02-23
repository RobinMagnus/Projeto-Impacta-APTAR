package com.projetoimpacta.aptar.repositories;

import com.projetoimpacta.aptar.domain.Tecnico;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TecnicoRepository extends JpaRepository<Tecnico, Long> {

    Optional<Tecnico> findByCpf(String cpf);
    Optional<Tecnico> findByEmail(String email);

}