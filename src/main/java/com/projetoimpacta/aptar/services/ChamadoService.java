package com.projetoimpacta.aptar.services;

import com.projetoimpacta.aptar.domain.Chamado;
import com.projetoimpacta.aptar.domain.Empresa;
import com.projetoimpacta.aptar.domain.NumeroChamado;
import com.projetoimpacta.aptar.domain.Tecnico;
import com.projetoimpacta.aptar.domain.enums.Prioridade;
import com.projetoimpacta.aptar.domain.enums.Status;
import com.projetoimpacta.aptar.dtos.ChamadoDTOinput_out;
import com.projetoimpacta.aptar.repositories.ChamadoRepository;
import com.projetoimpacta.aptar.services.exceptions.ObjectnotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ChamadoService {

    @Autowired
    private ChamadoRepository repository;

    @Autowired
    private TecnicoService tecnicoService;

    @Autowired
    private EmpresaService empresaService;

    public Chamado findById(Long id) {
        Optional<Chamado> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Chamado não encontrado! Id: " + id));
    }

    public List<Chamado> findAll() {
        return repository.findAll();
    }

    public Chamado create(@Valid ChamadoDTOinput_out objDTO) {
        return repository.save(newChamado(objDTO));
    }

    public Chamado update(Long id, ChamadoDTOinput_out objDTO) {
        objDTO.setId(id);
        Chamado chamadoExistente = findById(id);
        Chamado novoChamado = newChamado(objDTO);
        novoChamado.setNumeroChamado(chamadoExistente.getNumeroChamado());
        return repository.save(novoChamado);
    }

    private Chamado newChamado(ChamadoDTOinput_out obj) {
        Tecnico tecnico = tecnicoService.findById(obj.getTecnico());
        Empresa empresa = empresaService.findById(obj.getEmpresa());

        Chamado chamado = new Chamado();
        if (obj.getId() != null) {
            chamado.setId(obj.getId());
        }

        if (obj.getStatus().equals(2)) {
            chamado.setDataFechamento(LocalDate.now());
        }

        chamado.setTecnico(tecnico);
        chamado.setEmpresa(empresa);
        chamado.setNumeroChamado(NumeroChamado.proximoNumero());
        chamado.setPrioridade(Prioridade.toEnums(obj.getPrioridade()));
        chamado.setStatus(Status.toEnum(obj.getStatus()));
        chamado.setTitulo(obj.getTitulo());
        chamado.setObservacoes(obj.getObservacoes());
        chamado.setEndereco(obj.getEndereco());

        return chamado;
    }


}