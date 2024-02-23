package com.projetoimpacta.aptar.resources;

import com.projetoimpacta.aptar.domain.Empresa;
import com.projetoimpacta.aptar.dtos.EmpresaDTO;
import com.projetoimpacta.aptar.services.EmpresaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/empresas")
public class EmpresaResource {

    @Autowired
    private EmpresaService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<EmpresaDTO> findById(@PathVariable Long id) {
        Empresa obj = service.findById(id);
        return ResponseEntity.ok().body(new EmpresaDTO(obj));
    }

    @GetMapping
    public ResponseEntity<List<EmpresaDTO>> findAll() {
        List<Empresa> list = service.findAll();
        List<EmpresaDTO> listDTO = list.stream().map(EmpresaDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping
    public ResponseEntity<EmpresaDTO> create(@Valid @RequestBody EmpresaDTO objDTO) {
        Empresa newObj = service.create(objDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<EmpresaDTO> update(@PathVariable Long id, @Valid @RequestBody EmpresaDTO objDTO) {
        Empresa obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new EmpresaDTO(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<EmpresaDTO> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}