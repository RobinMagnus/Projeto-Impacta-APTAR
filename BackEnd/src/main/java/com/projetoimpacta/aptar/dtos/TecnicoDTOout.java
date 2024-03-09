package com.projetoimpacta.aptar.dtos;

import com.projetoimpacta.aptar.domain.Endereco;
import com.projetoimpacta.aptar.domain.Tecnico;

import java.io.Serial;
import java.io.Serializable;

public class TecnicoDTOout implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    protected String nome;
    protected String telefone;
    protected Endereco endereco;
    private String cpf;


    public TecnicoDTOout() {
    }

    public TecnicoDTOout(Tecnico obj) {
        this.nome = obj.getNome();
        this.telefone = obj.getTelefone();
        this.endereco = obj.getEndereco();
        this.cpf = obj.getCpf();
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

    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

}
