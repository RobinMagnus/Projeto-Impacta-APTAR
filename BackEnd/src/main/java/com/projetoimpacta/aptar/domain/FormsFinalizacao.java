package com.projetoimpacta.aptar.domain;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "form_finalizacao")
public class FormsFinalizacao implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @JoinColumn(name = "chamado_id")
    private Chamado chamado;
    private String observacoes;
    private String fotoUrl;

    public FormsFinalizacao() {}
    public FormsFinalizacao(Chamado chamado, String observacoes, String fotoUrl) {
        this.chamado = chamado;
        this.observacoes = observacoes;
        this.fotoUrl = fotoUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Chamado getChamado() {
        return chamado;
    }

    public void setChamado(Chamado chamado) {
        this.chamado = chamado;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }
}
