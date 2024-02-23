package com.projetoimpacta.aptar.services;

import com.projetoimpacta.aptar.domain.Chamado;
import com.projetoimpacta.aptar.domain.Empresa;
import com.projetoimpacta.aptar.domain.Endereco;
import com.projetoimpacta.aptar.domain.Tecnico;
import com.projetoimpacta.aptar.domain.enums.Perfil;
import com.projetoimpacta.aptar.domain.enums.Prioridade;
import com.projetoimpacta.aptar.domain.enums.Status;
import com.projetoimpacta.aptar.repositories.ChamadoRepository;
import com.projetoimpacta.aptar.repositories.EmpresaRepository;
import com.projetoimpacta.aptar.repositories.EntidadeRepository;
import com.projetoimpacta.aptar.repositories.TecnicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DBService {

    @Autowired
    private EntidadeRepository entidadeRepository;

    @Autowired
    private TecnicoRepository tecnicoRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private ChamadoRepository chamadoRepository;


    public void instanciaDB() {

        Tecnico tec1 = new Tecnico(null, "Valdir Cezar", "valdir@mail.com", "123", "11912345678",
                new Endereco("Rua Anibal", 123, null, "01234567", "Bragança", "São Paulo", "SP"),
                "42817219082");
        tec1.addPerfil(Perfil.ADMIN);
        Tecnico tec2 = new Tecnico(null, "Richard Stallman", "stallman@mail.com", "123", "11912345678",
                new Endereco("Rua Anibal", 123, null, "01234567", "Bragança", "São Paulo", "SP"),
                "85646225051");
        Tecnico tec3 = new Tecnico(null, "Claude Elwood Shannon", "shannon@mail.com", "123", "11912345678",
                new Endereco("Rua Anibal", 123, null, "01234567", "Bragança", "São Paulo", "SP"),
                "83578998036");
        Tecnico tec4 = new Tecnico(null, "Tim Berners-Lee", "lee@mail.com", "123", "11912345678",
                new Endereco("Rua Anibal", 123, null, "01234567", "Bragança", "São Paulo", "SP"),
                "39742638020");
        Tecnico tec5 = new Tecnico(null, "Linus Torvalds", "linus@mail.com", "123","11912345678",
                new Endereco("Rua Anibal", 123, null, "01234567", "Bragança", "São Paulo", "SP"),
                "55656833003");

        tecnicoRepository.saveAll(List.of(tec1, tec2, tec3, tec4, tec5));


        Empresa emp1 = new Empresa(null, "McDonalds", "mcdonalds@mail.com", "123", "11912345678",
                new Endereco("Rua Pinheiros", 123, null, "01234567", "Paulista", "São Paulo", "SP"),
                "29993632000185");
        Empresa emp2 = new Empresa(null, "Burger King", "burgerking@mail.com", "456", "11987654321",
                new Endereco("Avenida Paulista", 456, null, "09876543", "Bela Vista", "São Paulo", "SP"),
                "72537146000181");
        Empresa emp3 = new Empresa(null, "Subway", "subway@mail.com", "789", "11924681357",
                new Endereco("Rua Augusta", 789, "Sala 101", "65432109", "Consolação", "São Paulo", "SP"),
                "51774704000152");
        Empresa emp4 = new Empresa(null, "Pizza Hut", "pizzahut@mail.com", "987", "11935792468",
                new Endereco("Rua Oscar Freire", 1234, "Loja 2", "87654321", "Jardins", "São Paulo", "SP"),
                "69008832000150");
        Empresa emp5 = new Empresa(null, "KFC", "kfc@mail.com", "654", "11968475321",
                new Endereco("Rua Pamplona", 567, null, "54321098", "Jardim Paulista", "São Paulo", "SP"),
                "10676734000149");

        empresaRepository.saveAll(List.of(emp1, emp2, emp3, emp4, emp5));


        Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.EM_ANDAMENTO, "Chamado 01", "Primeiro Chamado",
                new Endereco("Rua Pinheiros", 123, null, "01234567", "Paulista", "São Paulo", "SP"),
                tec1, emp1);
        Chamado c2 = new Chamado(null, Prioridade.ALTA, Status.ABERTO, "Chamado 02", "Segundo Chamado",
                new Endereco("Avenida Paulista", 456, null, "09876543", "Bela Vista", "São Paulo", "SP"),
                tec2, emp2);
        Chamado c3 = new Chamado(null, Prioridade.BAIXA, Status.ENCERRADO, "Chamado 03", "Terceiro Chamado",
                new Endereco("Rua Augusta", 789, "Sala 101", "65432109", "Consolação", "São Paulo", "SP"),
                tec3, emp3);
        Chamado c4 = new Chamado(null, Prioridade.MEDIA, Status.EM_ANDAMENTO, "Chamado 04", "Quarto Chamado",
                new Endereco("Rua Oscar Freire", 1234, "Loja 2", "87654321", "Jardins", "São Paulo", "SP"),
                tec5, emp4);
        Chamado c5 = new Chamado(null, Prioridade.ALTA, Status.ABERTO, "Chamado 05", "Quinto Chamado",
                new Endereco("Rua Pamplona", 567, null, "54321098", "Jardim Paulista", "São Paulo", "SP"),
                tec5, emp5);

        chamadoRepository.saveAll(List.of(c1, c2, c3, c4, c5));

    }

}