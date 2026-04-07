# Sistema de Controle de Entregas

## Descrição do Projeto
Este projeto é um sistema simples de **controle de entregas** desenvolvido em **HTML, CSS e JavaScript**.  
O sistema permite o cadastro de mercadorias, cadastro de endereços e a vinculação 1:1 entre mercadorias e endereços para controle de entrega.

O objetivo é atender à atividade prática de **manutenção e configuração de software**, utilizando **controle de versão com Git e GitHub**, incluindo criação de branches, commits, merge e pull requests.

---

## Funcionalidades
1. **Tela de login**
   - Usuário: qualquer email fictício  
   - Senha: `12345678`  

2. **Cadastro de mercadoria**
   - Campos mínimos:
     - Nome do produto
     - Quantidade
     - Peso
     - Preço
     - Categoria  

3. **Cadastro de endereço**
   - Campos:
     - Logradouro
     - Complemento
     - Número
     - CEP
     - Cidade
     - Estado  

4. **Vinculação 1:1 entre mercadoria e endereço**
   - Cada mercadoria só pode ser entregue em um endereço específico  

---

## Fluxo de Branches e Controle de Versionamento

- **Branch principal (`main`)**
  - Recebe apenas código estável
  - Merge realizado a partir da branch `release-dev`  

- **Branch de desenvolvimento (`release-dev`)**
  - Todos os commits foram feitos aqui
  - Commits registrados:
    1. Estrutura inicial (index.html, script.js, style.css)
    2. Tela de login
    3. Cadastro de mercadoria
    4. Cadastro de endereço
    5. Vinculação 1:1 entre mercadoria e endereço  

- **Fluxo de Git usado**
  1. Criar branch `release-dev`
  2. Adicionar arquivos e fazer commits na branch de desenvolvimento
  3. Subir a branch para GitHub (`git push origin release-dev`)
  4. Criar branch `main` localmente e fazer merge da `release-dev`
  5. Subir branch `main` para GitHub (`git push origin main`)
  6. (Opcional) Deletar `release-dev` local e remoto para limpeza  

---

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6)
- Git / GitHub

---

## Como Executar
1. Clonar o repositório:

```bash
git clone https://github.com/Mrc0345/controle-de-entregas.git
