package com.projetoimpacta.aptar.resources;

import com.projetoimpacta.aptar.domain.Empresa;
import com.projetoimpacta.aptar.domain.Tecnico;
import com.projetoimpacta.aptar.dtos.EmpresaDTOinput;
import com.projetoimpacta.aptar.dtos.EmpresaDTOout;
import com.projetoimpacta.aptar.dtos.TecnicoDTOinput;
import com.projetoimpacta.aptar.dtos.TecnicoDTOout;
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
    public ResponseEntity<EmpresaDTOout> findById(@PathVariable Long id) {
        Empresa obj = service.findById(id);
        return ResponseEntity.ok().body(new EmpresaDTOout(obj));
    }

    @GetMapping(value = "search/{cnpj}")
    public ResponseEntity<EmpresaDTOout> findByCnpj(@PathVariable String cnpj) {
        Empresa obj = service.findByCnpj(cnpj);
        return ResponseEntity.ok().body(new EmpresaDTOout(obj));
    }

//    @GetMapping(value = "/searchEmail/{email}")
//    public ResponseEntity<EmpresaDTOout> findByEmail(@PathVariable String email) {
//        Empresa obj = service.findByEmail(email);
//        new EmpresaDTOinput(obj);
//        return ResponseEntity.ok().body(new EmpresaDTOout(obj));
//    }

    @GetMapping
    public ResponseEntity<List<EmpresaDTOout>> findAll() {
        List<Empresa> list = service.findAll();
        List<EmpresaDTOout> listDTO = list.stream().map(EmpresaDTOout::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping
    public ResponseEntity<EmpresaDTOinput> create(@Valid @RequestBody EmpresaDTOinput objDTO) {
        Empresa newObj = service.create(objDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<EmpresaDTOinput> update(@PathVariable Long id, @Valid @RequestBody EmpresaDTOinput objDTO) {
        Empresa obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new EmpresaDTOinput(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<EmpresaDTOinput> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}