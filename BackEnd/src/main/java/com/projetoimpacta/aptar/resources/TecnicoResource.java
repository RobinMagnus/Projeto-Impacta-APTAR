package com.projetoimpacta.aptar.resources;

import com.projetoimpacta.aptar.domain.Tecnico;
import com.projetoimpacta.aptar.dtos.TecnicoDTOinput;
import com.projetoimpacta.aptar.dtos.TecnicoDTOout;
import com.projetoimpacta.aptar.services.TecnicoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/tecnicos")
public class TecnicoResource {

    @Autowired
    private TecnicoService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<TecnicoDTOout> findById(@PathVariable Long id) {
        Tecnico obj = service.findById(id);
        new TecnicoDTOinput(obj);
        return ResponseEntity.ok().body(new TecnicoDTOout(obj));
    }

    @GetMapping(value = "/search/{cpf}")
    public ResponseEntity<TecnicoDTOout> findByCpf(@PathVariable String cpf) {
        Tecnico obj = service.findByCpf(cpf);
        new TecnicoDTOinput(obj);
        return ResponseEntity.ok().body(new TecnicoDTOout(obj));
    }

    @GetMapping
    public ResponseEntity<List<TecnicoDTOout>> findAll() {
        List<Tecnico> list = service.findAll();
        List<TecnicoDTOout> listDTO = list.stream().map(TecnicoDTOout::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping
    public ResponseEntity<TecnicoDTOinput> create(@Valid @RequestBody TecnicoDTOinput objDTO) {
        Tecnico newObj = service.create(objDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<TecnicoDTOinput> update(@PathVariable Long id, @Valid @RequestBody TecnicoDTOinput objDTO) {
        Tecnico obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new TecnicoDTOinput(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<TecnicoDTOinput> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}