package com.projetoimpacta.aptar.domain.enums;

public enum Status {

    ABERTO(0, "ABERTO"),
    EM_ANDAMENTO(1, "EM_ANDAMENTO"),
    ENCERRADO(2, "ENCERRADO");


    private final Integer codigo;
    private final String descricao;


    Status(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }


    public Integer getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }


    public static Status toEnum(Integer cod) {
        if (cod == null) {
            return null;
        }

        for (Status x : Status.values()) {
            if (cod.equals(x.getCodigo())) {
                return x;
            }
        }

        throw new IllegalArgumentException("Status Inválido");
    }
}