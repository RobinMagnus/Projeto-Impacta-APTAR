package com.projetoimpacta.aptar.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.projetoimpacta.aptar.domain.Empresa;
import com.projetoimpacta.aptar.domain.Endereco;
import com.projetoimpacta.aptar.domain.enums.Perfil;
import jakarta.validation.constraints.NotNull;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class EmpresaDTOout implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    protected String nome;
    protected String telefone;
    protected Endereco endereco;
    private String cnpj;
    private String email;
    private String senha;





    public EmpresaDTOout(Empresa obj) {
        this.nome = obj.getNome();
        this.telefone = obj.getTelefone();
        this.endereco = obj.getEndereco();
        this.cnpj = obj.getCnpj();
        this.email= obj.getEmail();
        this.senha = obj.getSenha();
    }


    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Endereco getEndereco() {
        return endereco;
    }
    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public String getCnpj() {
        return cnpj;
    }
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }
    public String getSenha() {
        return senha;
    }


    public void setSenha(String senha) {
        this.senha = senha;
    }
}
