package com.projetoimpacta.aptar.services;

import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.lib.Repository;
import org.eclipse.jgit.storage.file.FileRepositoryBuilder;
import org.eclipse.jgit.transport.CredentialsProvider;
import org.eclipse.jgit.transport.UsernamePasswordCredentialsProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class GitService {
    @Value("${git.repo.path}")
    private String repoPath;

    @Value("${images.dir.path}")
    private String imagesDirPath;

    @Value("${git.username}")
    private String username;

    @Value("${git.password}")
    private String password;

    public void addCommitAndPushImages() throws IOException, GitAPIException {
        // Caminho para o repositório local
        File repoDir = new File(repoPath);
        // Caminho para a pasta onde suas imagens estão armazenadas
        File imagensDir = new File(imagesDirPath);
        // Construir o repositório
        Repository repo = new FileRepositoryBuilder()
                .setGitDir(repoDir)
                .build();
        // Inicializar o objeto Git
        Git git = new Git(repo);
        try {
            CredentialsProvider credentialsProvider = new UsernamePasswordCredentialsProvider(username, password);
            // Adicionar todas as imagens ao controle de versão
            git.add()
                    .addFilepattern(imagensDir.getName())
                    .call();
            // Fazer um commit das alterações
            git.commit()
                    .setMessage("Adicionando novas imagens")
                    .call();
            // Enviar as alterações para o repositório remoto
            git.push()
                    .setCredentialsProvider(credentialsProvider)
                    .call();
        } finally {
            // Fechar o objeto Git
            git.close();
        }
    }

    public CredentialsProvider getCredentialsProvider() {
        // Retornar um provedor de credenciais usando nome de usuário e senha ou token de acesso pessoal
        return new UsernamePasswordCredentialsProvider(username, password);
    }

    private Git git;

    public void removeFileAndCommit(String filePath, String commitMessage) throws GitAPIException {
        // Remove o arquivo do repositório Git
        git.rm()
                .addFilepattern(filePath)
                .call();

        // Realiza o commit com a mensagem fornecida
        git.commit()
                .setMessage(commitMessage)
                .call();
    }

    public void close() {
        // Fecha o repositório Git
        git.close();
    }

}
