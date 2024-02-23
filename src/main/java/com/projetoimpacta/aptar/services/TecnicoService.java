package com.projetoimpacta.aptar.services;

import com.projetoimpacta.aptar.domain.Tecnico;
import com.projetoimpacta.aptar.repositories.TecnicoRepository;
import com.projetoimpacta.aptar.dtos.TecnicoDTO;
import com.projetoimpacta.aptar.services.exceptions.ObjectnotFoundException;
import com.projetoimpacta.aptar.services.exceptions.DataIntegrityViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TecnicoService {

    @Autowired
    private TecnicoRepository repository;

    public Tecnico findById(Long id) {
        Optional<Tecnico> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Técnico não encontrado! Id: " + id));
    }

    public List<Tecnico> findAll() {
        return repository.findAll();
    }

    public Tecnico create(TecnicoDTO objDTO) {
        objDTO.setId(null);
        validaPorCpfeEmail(objDTO);
        Tecnico newObj = new Tecnico(objDTO);
        return repository.save(newObj);
    }

    public Tecnico update(Long id, TecnicoDTO objDTO) {
        objDTO.setId(id);
        findById(id);
        Tecnico oldObj;
        validaPorCpfeEmail(objDTO);
        oldObj = new Tecnico(objDTO);
        return repository.save(oldObj);
    }

    public void delete(Long id) {
        Tecnico obj = findById(id);
        if (!obj.getChamados().isEmpty()) {
            throw new DataIntegrityViolationException("Técnico possui ordens de serviço e não pode ser deletado");
        }
        repository.deleteById(id);
    }

    private void validaPorCpfeEmail(TecnicoDTO objDTO) {

        Optional<Tecnico> obj = repository.findByCpf(objDTO.getCpf());
        if (obj.isPresent() && obj.get().getId() != objDTO.getId()) {
            throw new DataIntegrityViolationException("CPF já cadastrado no sistema!");
        }

        obj = repository.findByEmail(objDTO.getEmail());
        if (obj.isPresent() && obj.get().getId() != objDTO.getId()) {
            throw new DataIntegrityViolationException("Email já cadastrado no sistema!");
        }

    }
}