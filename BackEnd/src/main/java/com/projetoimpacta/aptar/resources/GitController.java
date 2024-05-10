package com.projetoimpacta.aptar.resources;

import com.projetoimpacta.aptar.domain.FormsFinalizacao;
import com.projetoimpacta.aptar.dtos.FormsFinalizacaoDTO;
import com.projetoimpacta.aptar.repositories.FormsFinalizacaoRepository;
import com.projetoimpacta.aptar.util.UploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ModelAndView formFinalizacao(@ModelAttribute FormsFinalizacao formsFinalizacao, @RequestParam("File") MultipartFile imagem) {
        ModelAndView view = new ModelAndView("form-finalizacao");
        view.addObject("form", formsFinalizacao);

        try {
            if(UploadUtil.fazerUploadImagem(imagem)){
                formsFinalizacao.setFotoUrl(imagem.getOriginalFilename());
            }
            formsRepository.save(formsFinalizacao);

        } catch (Exception e) {
            System.out.println("Salvo com sucesso: " + formsFinalizacao.getFotoUrl());
        }
        return view;
    }
}
