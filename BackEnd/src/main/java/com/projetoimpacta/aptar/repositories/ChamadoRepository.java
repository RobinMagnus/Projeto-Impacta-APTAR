package com.projetoimpacta.aptar.repositories;

import com.projetoimpacta.aptar.domain.Chamado;
import com.projetoimpacta.aptar.domain.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChamadoRepository extends JpaRepository<Chamado, Long> {

    Optional<Chamado> findByNumeroChamado(String numeroChamado);

}
