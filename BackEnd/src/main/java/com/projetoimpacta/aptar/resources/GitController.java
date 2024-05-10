package com.projetoimpacta.aptar.resources;

import com.projetoimpacta.aptar.domain.FormsFinalizacao;
import com.projetoimpacta.aptar.dtos.FormsFinalizacaoDTO;
import com.projetoimpacta.aptar.repositories.FormsFinalizacaoRepository;
import com.projetoimpacta.aptar.util.UploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Component
@RestController
@RequestMapping("/git")
public class GitController {

    @Autowired
    private FormsFinalizacaoRepository formsRepository;

    @PostMapping("/form-finalizacao")
    public ResponseEntity<?> formFinalizacao(@ModelAttribute FormsFinalizacao formsFinalizacaoDTO, @RequestParam("File") MultipartFile imagem) {
        try {
            // Manipulação do upload de imagem
            if (UploadUtil.fazerUploadImagem(imagem)) {
                formsFinalizacaoDTO.setFotoUrl(imagem.getOriginalFilename());
            }

            // Salva formsFinalizacaoDTO
            formsRepository.save(formsFinalizacaoDTO);

            // Retorna resposta com status OK
            return ResponseEntity.ok().body(formsFinalizacaoDTO);
        } catch (Exception e) {
            // Trata a exceção e retorna um status de erro
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao processar o formulário de finalização: " + e.getMessage());
        }
    }
}
