#!/bin/bash

# Verifica se o diretório atual é um repositório Git
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "O diretório atual não é um repositório Git."
    exit 1
fi

# Verifica se há alterações para adicionar ao estágio
if git diff-index --quiet HEAD --; then
    echo "Nenhuma alteração para comitar."
    exit 0
fi

# Adiciona todas as alterações ao estágio
git add .

# Define uma mensagem de commit padrão
echo "Digite a mensagem de commit (ou deixe em branco para usar a mensagem padrão):"
read -r commit_message

if [ -z "$commit_message" ]; then
    commit_message="Commit automático"
fi

# Comita as mudanças com a mensagem fornecida
git commit -m "$commit_message"

# Faz push para o repositório remoto (por padrão para 'origin' e branch 'main')
git push origin testUpload

echo "Commit e push concluídos com sucesso!"
