package com.projetoimpacta.aptar.resources;

import com.projetoimpacta.aptar.dtos.FormsFinalizacaoDTO;
import com.projetoimpacta.aptar.services.FormsFinalizacaoService;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.lib.PersonIdent;
import org.eclipse.jgit.transport.UsernamePasswordCredentialsProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;

@Component
@RestController
@RequestMapping("/git")
public class GitController {

    @Autowired
    private FormsFinalizacaoService formsFinalizacaoService;

    private static final String UPLOAD_DIR = "C:\\Workspace Java\\aptar - (Teste upload)\\Projeto-Impacta-APTAR-main\\upload"; // Defina o caminho correto para o diretório de upload

    @PostMapping("/upload")
    public String uploadImage(@RequestParam("chamadoId") Long chamadoId,
                              @RequestParam("observacoes") String observacoes,
                              @RequestParam("file") MultipartFile file) {
        try {
            // Salvar o arquivo na pasta de upload
            String originalFilename = file.getOriginalFilename();
            File uploadFile = new File(UPLOAD_DIR, originalFilename);
            file.transferTo(uploadFile);

            // Cria um FormsFinalizacaoDTO com os dados de entrada
            FormsFinalizacaoDTO formsFinalizacaoDTO = new FormsFinalizacaoDTO();
            formsFinalizacaoDTO.setObservacoes(observacoes);
            formsFinalizacaoDTO.setFotoUrl(originalFilename); // Salvar o nome do arquivo na fotoUrl

            // Chamar o serviço para criar ou atualizar FormsFinalizacao
            formsFinalizacaoService.create(chamadoId, formsFinalizacaoDTO, file);

            return "Imagem enviada e FormsFinalizacao atualizado com sucesso!";
        } catch (IOException e) {
            // Lidar com exceções relacionadas ao IO
            e.printStackTrace();
            return "Erro ao enviar a imagem: " + e.getMessage();
        }
    }
}

