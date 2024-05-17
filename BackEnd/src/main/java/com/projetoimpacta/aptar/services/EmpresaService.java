package com.projetoimpacta.aptar.services;

import com.projetoimpacta.aptar.domain.Empresa;
import com.projetoimpacta.aptar.dtos.EmpresaDTOinput;
import com.projetoimpacta.aptar.repositories.EmpresaRepository;
import com.projetoimpacta.aptar.services.exceptions.ObjectnotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import com.projetoimpacta.aptar.services.exceptions.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpresaService {


    @Autowired
    private EmpresaRepository repository;

    public Empresa findById(Long id) {
        Optional<Empresa> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Empresa não encontrada! Id: " + id));
    }

    public Empresa findByCnpj(String cnpj) {
        Optional<Empresa> obj = repository.findByCnpj(cnpj);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Empresa não encontrada!"));
    }

    public List<Empresa> findAll() {
        return repository.findAll();
    }

    public Empresa create(EmpresaDTOinput objDTO) {
        objDTO.setId(null);
        validaPorCnpjeEmail(objDTO);
        Empresa newObj = new Empresa(objDTO);
        return repository.save(newObj);
    }

    public Empresa update(Long id, EmpresaDTOinput objDTO) {
        objDTO.setId(id);
        findById(id);
        Empresa obj;
        validaPorCnpjeEmail(objDTO);
        obj = new Empresa(objDTO);
        return repository.save(obj);
    }

    public void delete(Long id) {
        Empresa obj = findById(id);
        if (!obj.getChamados().isEmpty()) {
            throw new DataIntegrityViolationException("Empresa possui ordens de serviço e não pode ser deletado");
        }
        repository.deleteById(id);
    }

    private void validaPorCnpjeEmail(EmpresaDTOinput objDTO) {

        Optional<Empresa> obj = repository.findByCnpj(objDTO.getCnpj());
        if (obj.isPresent() && obj.get().getId() != objDTO.getId()) {
            throw new DataIntegrityViolationException("CNPJ já cadastrado no sistema!");
        }

        obj = repository.findByEmail(objDTO.getEmail());
        if (obj.isPresent() && obj.get().getId() != objDTO.getId()) {
            throw new DataIntegrityViolationException("Email já cadastrado no sistema!");
        }


    }
}
