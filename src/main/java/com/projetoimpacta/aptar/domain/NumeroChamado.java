package com.projetoimpacta.aptar.domain;

public class NumeroChamado {

    private static int contador = 0;

    public static synchronized String proximoNumero() {
        contador += 3;
        return String.format("%06d", contador);
    }
}
