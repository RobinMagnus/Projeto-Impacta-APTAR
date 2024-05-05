package com.projetoimpacta.aptar.services;

import com.projetoimpacta.aptar.domain.Chamado;
import com.projetoimpacta.aptar.domain.FormsFinalizacao;
import com.projetoimpacta.aptar.dtos.ChamadoDTOinput;
import com.projetoimpacta.aptar.dtos.FormsFinalizacaoDTO;
import com.projetoimpacta.aptar.repositories.ChamadoRepository;
import com.projetoimpacta.aptar.repositories.FormsFinalizacaoRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

@Service
public class FormsFinalizacaoService {

    @Autowired
    private FormsFinalizacaoRepository repository;

    @Autowired
    private ChamadoRepository chamadoRepository;
    @Autowired
    private FormsFinalizacaoRepository formsFinalizacaoRepository;

    public FormsFinalizacao create(Long chamadoId, FormsFinalizacaoDTO formsFinalizacaoDTO, MultipartFile file) throws IOException {
        // Encontrar a instância de Chamado com base no ID fornecido
        Chamado chamado = chamadoRepository.findById(chamadoId)
                .orElseThrow(() -> new IllegalArgumentException("Chamado não encontrado com o ID: " + chamadoId));

        // Salvar o arquivo enviado
        String fotoUrl = saveFile(file);

        // Criar uma nova instância de FormsFinalizacao com base nos dados do DTO
        FormsFinalizacao formsFinalizacao = new FormsFinalizacao(
                chamado,
                formsFinalizacaoDTO.getObservacoes(),
                fotoUrl // Usar o nome do arquivo salvo para fotoUrl
        );

        // Salvar a nova instância de FormsFinalizacao no banco de dados
        return formsFinalizacaoRepository.save(formsFinalizacao);
    }

    private String saveFile(MultipartFile file) throws IOException {
        // Diretório onde o arquivo será salvo
        String uploadDir = "C:\\Workspace Java\\aptar - (Teste upload)\\Projeto-Impacta-APTAR-main\\upload";

        // Nome do arquivo original enviado
        String originalFilename = file.getOriginalFilename();

        // Crie um novo arquivo no diretório de upload
        File destinationFile = new File(uploadDir, originalFilename);

        // Salve o arquivo no diretório de upload
        file.transferTo(destinationFile);

        // Retorne o nome do arquivo (para salvar em FormsFinalizacao)
        return originalFilename;
    }
}
