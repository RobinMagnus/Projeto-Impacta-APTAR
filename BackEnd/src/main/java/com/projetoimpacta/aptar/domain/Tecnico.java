package com.projetoimpacta.aptar.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetoimpacta.aptar.domain.enums.Perfil;
import com.projetoimpacta.aptar.dtos.TecnicoDTOinput;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import org.hibernate.validator.constraints.br.CPF;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Entity
public class Tecnico extends Entidade implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @CPF
    @Column(unique = true)
    private String cpf;

    private String email;

    @JsonIgnore
    @OneToMany(mappedBy = "tecnico")
    private List<Chamado> chamados = new ArrayList<>();


    public Tecnico() {
        super();
        addPerfil(Perfil.TECNICO);
    }

    public Tecnico(Long id, String nome, String email, String senha, String telefone, Endereco endereco, String cpf) {
        super(id, nome, email, senha, telefone, endereco);
        this.cpf = cpf;
        addPerfil(Perfil.TECNICO);
    }

    public Tecnico(TecnicoDTOinput obj) {
        this.id = obj.getId();
        this.nome = obj.getNome();
        this.email = obj.getEmail();
        this.senha = obj.getSenha();
        this.telefone = obj.getTelefone();
        this.endereco = obj.getEndereco();
        this.perfis = obj.getPerfis().stream().map(Perfil::getCodigo).collect(Collectors.toSet());
        this.dataCriacao = obj.getDataCriacao();
        this.cpf = obj.getCpf();
    }


    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public List<Chamado> getChamados() {
        return chamados;
    }
    public void setChamados(List<Chamado> chamados) {
        this.chamados = chamados;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Tecnico tecnico = (Tecnico) o;
        return Objects.equals(cpf, tecnico.cpf);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), cpf);
    }
}
