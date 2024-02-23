package com.projetoimpacta.aptar.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetoimpacta.aptar.domain.enums.Perfil;
import com.projetoimpacta.aptar.dtos.EmpresaDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import org.hibernate.validator.constraints.br.CNPJ;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Entity
public class Empresa extends Entidade implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @CNPJ
    @Column(unique = true)
    private String cnpj;

    @JsonIgnore
    @OneToMany(mappedBy = "empresa")
    private List<Chamado> chamados = new ArrayList<>();


    public Empresa() {
        super();
        addPerfil(Perfil.EMPRESA);
    }

    public Empresa(Long id, String nome, String email, String senha, String telefone, Endereco endereco, String cnpj) {
        super(id, nome, email, senha, telefone, endereco);
        this.cnpj = cnpj;
        addPerfil(Perfil.EMPRESA);
    }

    public Empresa(EmpresaDTO obj) {
        this.id = obj.getId();
        this.nome = obj.getNome();
        this.email = obj.getEmail();
        this.senha = obj.getSenha();
        this.telefone = obj.getTelefone();
        this.endereco = obj.getEndereco();
        this.perfis = obj.getPerfis().stream().map(Perfil::getCodigo).collect(Collectors.toSet());
        this.dataCriacao = obj.getDataCriacao();
        this.cnpj = obj.getCnpj();
    }


    public String getCnpj() {
        return cnpj;
    }
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
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
        Empresa empresa = (Empresa) o;
        return Objects.equals(cnpj, empresa.cnpj);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), cnpj);
    }
}
