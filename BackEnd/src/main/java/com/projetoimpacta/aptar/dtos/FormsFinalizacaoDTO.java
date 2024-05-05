package com.projetoimpacta.aptar.dtos;

import com.projetoimpacta.aptar.domain.Chamado;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

public class FormsFinalizacaoDTO implements Serializable {

    private Long id;
    private Long chamadoId;
    private String observacoes;
    @NotNull(message = "O campo FOTO é requerido")
    private String fotoUrl;

    public FormsFinalizacaoDTO() {}
    public FormsFinalizacaoDTO(Long chamadoId, String observacoes, String fotoUrl) {
        this.chamadoId = chamadoId;
        this.observacoes = observacoes;
        this.fotoUrl = fotoUrl;
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
}
