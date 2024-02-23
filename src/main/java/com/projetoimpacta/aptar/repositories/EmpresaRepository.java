package com.projetoimpacta.aptar.repositories;

import com.projetoimpacta.aptar.domain.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    Optional<Empresa> findByCnpj(String cpf);
    Optional<Empresa> findByEmail(String email);

}