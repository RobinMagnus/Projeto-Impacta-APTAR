package com.projetoimpacta.aptar.resources;

import com.projetoimpacta.aptar.domain.Chamado;
import com.projetoimpacta.aptar.domain.FormsFinalizacao;
import com.projetoimpacta.aptar.dtos.FormsFinalizacaoDTO;
import com.projetoimpacta.aptar.repositories.ChamadoRepository;
import com.projetoimpacta.aptar.repositories.FormsFinalizacaoRepository;
import com.projetoimpacta.aptar.util.UploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

@Component
@RestController
@RequestMapping("/git")
public class GitController {

    @Autowired
    private ChamadoRepository chamadoRepository;
    @Autowired
    private FormsFinalizacaoRepository formsRepository;

    @PostMapping("/form-finalizacao")
    public ResponseEntity<?> formFinalizacao(@ModelAttribute FormsFinalizacaoDTO formsFinalizacaoDTO, @RequestParam("File") MultipartFile imagem) {
        try {
            // Manipulação do upload de imagem
            if (UploadUtil.fazerUploadImagem(imagem)) {
                formsFinalizacaoDTO.setFotoUrl(imagem.getOriginalFilename());
            }

            // Converte o DTO para uma entidade FormsFinalizacao
            FormsFinalizacao formsFinalizacao = convertDtoToEntity(formsFinalizacaoDTO);

            // Salva a entidade formsFinalizacao
            formsRepository.save(formsFinalizacao);

            // Retorna resposta com status OK
            return ResponseEntity.ok().body(formsFinalizacaoDTO);
        } catch (Exception e) {
            // Trata a exceção e retorna um status de erro
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao processar o formulário de finalização: " + e.getMessage());
        }
    }

    private FormsFinalizacao convertDtoToEntity(FormsFinalizacaoDTO dto) {
        // Crie uma instância de FormsFinalizacao
        FormsFinalizacao formsFinalizacao = new FormsFinalizacao();

        // Preencha os campos da entidade com os valores do DTO
        formsFinalizacao.setObservacoes(dto.getObservacoes());
        formsFinalizacao.setFotoUrl(dto.getFotoUrl());

        Optional<Chamado> chamadoOpt = chamadoRepository.findById(dto.getChamadoId());
        if (chamadoOpt.isPresent()) {
            formsFinalizacao.setChamado(chamadoOpt.get());
        } else {
            throw new IllegalArgumentException("Chamado não encontrado com o ID: " + dto.getChamadoId());
        }

        // Retorne a entidade preenchida
        return formsFinalizacao;
    }
}
