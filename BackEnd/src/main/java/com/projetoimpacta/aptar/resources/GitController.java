package com.projetoimpacta.aptar.resources;

import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.lib.PersonIdent;
import org.eclipse.jgit.transport.UsernamePasswordCredentialsProvider;
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

    private static final String REPO_URL = "https://github.com/CodeByTeusSilva/Projeto-Impacta-APTAR.git";
    private static final String LOCAL_DIR = "C:\\Workspace Java\\aptar - (Teste upload)\\Projeto-Impacta-APTAR-main";
    private static final String COMMIT_MESSAGE = "Add image";
    private static final String UPLOAD_DIR = LOCAL_DIR + "\\upload";

    @Value("${git.username}")
    private String USERNAME;  // Adicione seu nome de usuário GitHub
    @Value("${git.token}")
    private String TOKEN;

    @PostMapping("/upload")
    public String uploadImage(@RequestParam("file") MultipartFile file) {
        String result = "";
        File uploadFile = new File(UPLOAD_DIR + "/" + file.getOriginalFilename());

        try {
            // Salvar o arquivo na pasta de upload
            file.transferTo(uploadFile);

            // Clonar ou abrir o repositório localmente
            Git git = null;
            File gitDirectory = new File(LOCAL_DIR);

            if (gitDirectory.exists() && gitDirectory.isDirectory()) {
                git = Git.open(gitDirectory);
            } else {
                git = Git.cloneRepository()
                        .setURI(REPO_URL)
                        .setDirectory(gitDirectory)
                        .call();
            }

            // Adicionar o arquivo à pasta de upload
            git.add().addFilepattern("upload/" + file.getOriginalFilename()).call();


            // Cometer a alteração
            git.commit()
                    .setMessage(COMMIT_MESSAGE)
                    .setAuthor(new PersonIdent("Your Name", "your-email@example.com"))
                    .call();

            // Enviar as alterações para o repositório remoto
            git.push()
                    .setCredentialsProvider(new UsernamePasswordCredentialsProvider(USERNAME, TOKEN))
                    .setRemote("origin")
                    .call();

            result = "Imagem enviada com sucesso!";
        } catch (IOException | GitAPIException e) {
            e.printStackTrace();
            result = "Erro ao enviar a imagem: " + e.getMessage();
        }

        return result;
    }
}
