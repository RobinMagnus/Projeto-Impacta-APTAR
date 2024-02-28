package com.projetoimpacta.aptar.resources;

import com.projetoimpacta.aptar.domain.Chamado;
import com.projetoimpacta.aptar.dtos.ChamadoDTOinput_out;
import com.projetoimpacta.aptar.services.ChamadoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/chamados")
public class ChamadoResource {

    @Autowired
    private ChamadoService service;


    @GetMapping(value = "/{id}")
    public ResponseEntity<ChamadoDTOinput_out> findById(@PathVariable Long id) {
        Chamado obj = service.findById(id);
        return ResponseEntity.ok().body(new ChamadoDTOinput_out(obj));
    }

    @GetMapping(value = "os/{numeroChamado}")
    public ResponseEntity<ChamadoDTOinput_out> findByNumeroChamado(@PathVariable String numeroChamado) {
        Chamado obj = service.findByNumeroChamado(numeroChamado);
        return ResponseEntity.ok().body(new ChamadoDTOinput_out(obj));
    }

    @GetMapping
    public ResponseEntity<List<ChamadoDTOinput_out>> findAll() {
        List<Chamado> list = service.findAll();
        List<ChamadoDTOinput_out> listDTO = list.stream().map(ChamadoDTOinput_out::new).toList();
        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping
    public ResponseEntity<ChamadoDTOinput_out> create(@Valid @RequestBody ChamadoDTOinput_out objDTO) {
        Chamado obj = service.create(objDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ChamadoDTOinput_out> update(@Valid @PathVariable Long id, @RequestBody ChamadoDTOinput_out objDTO) {
        Chamado newObj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new ChamadoDTOinput_out(newObj));
    }

    @GetMapping(value = "/empresa/{id}")
    public ResponseEntity<List<ChamadoDTOinput_out>> findByEmpresaId(@PathVariable Long id) {
        List<ChamadoDTOinput_out> chamadosDTO = service.findByEmpresaId(id);
        return ResponseEntity.ok().body(chamadosDTO);
    }
    @GetMapping(value = "/tecnico/{id}")
    public ResponseEntity<List<ChamadoDTOinput_out>> findByTecnicoId(@PathVariable Long id) {
        List<ChamadoDTOinput_out> chamadosDTO = service.findByTecnicoId(id);
        return ResponseEntity.ok().body(chamadosDTO);
    }


}