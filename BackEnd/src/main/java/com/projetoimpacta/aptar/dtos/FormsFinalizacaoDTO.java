package com.projetoimpacta.aptar.dtos;

import com.projetoimpacta.aptar.domain.Chamado;
import com.projetoimpacta.aptar.domain.FormsFinalizacao;

import java.io.Serializable;

public class FormsFinalizacaoDTO implements Serializable {

    private Long id;
    private Long chamadoId;
    private String observacoes;
    private String fotoUrl;

    public FormsFinalizacaoDTO() {}

    public FormsFinalizacaoDTO(Long chamadoId, String observacoes, String fotoUrl) {
        this.chamadoId = chamadoId;
        this.observacoes = observacoes;
        this.fotoUrl = fotoUrl;
    }

    public FormsFinalizacaoDTO(FormsFinalizacao formsFinalizacao) {
        this.id = formsFinalizacao.getId();
        this.chamadoId = formsFinalizacao.getChamado() != null ? formsFinalizacao.getChamado().getId() : null;
        this.observacoes = formsFinalizacao.getObservacoes();
        this.fotoUrl = formsFinalizacao.getFotoUrl();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getChamadoId() {
        return chamadoId;
    }

    public void setChamadoId(Long chamadoId) {
        this.chamadoId = chamadoId;
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

    // Método para converter FormsFinalizacaoDTO em FormsFinalizacao
    public FormsFinalizacao toEntity(Chamado chamado) {
        FormsFinalizacao formsFinalizacao = new FormsFinalizacao(chamado, observacoes, fotoUrl);
        formsFinalizacao.setId(id);
        return formsFinalizacao;
    }
}
