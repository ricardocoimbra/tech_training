# Tech Training ElDorado

## Projeto final do 2º Tech Training do ElDorado

### Semana 01

- [x] Criação do repositório no GitHub (único para back-end e front-end)
- [ ] Criação de uma REST API em Node.js (versão 10 ou superior)
  - [x] Estrutura inicial
  - [ ] Conexão com o banco de dados
  - [x] Modelagem das entidades
- [ ] Criação da estrutura de banco de dados
  - [ ] Utilizar o MySQL
- [ ] Modelagem das seguintes entidades:
  - [x] Device:
    - [x] Id: (gerado automaticamente. Inteiro e incremental)
    - [x] Category: uma seleção suspensa que você pode escolher entre todas as categorias acessíveis.
    - [x] Color: Campo de texto, com validação (somente letras, tamanho máximo 16)
    - [x] PartNumber: campo inteiro positivo, com validação.
  - [x]Category:
    - [x] Id: (gerado automaticamente, inteiro e incremental)
    - [x] Name: Não deve estar vazio. Todas as categorias devem ter um nome. Tamanho máximo 128 caracteres.
    - [x] Todos os campos são obrigatórios.
  
- [ ] Você deve fornecer o script (SQL ou qualquer script de migração/versão de banco de dados) que pode criar o banco de dados do zero.
- [x] Use o GIT, confirme cada progresso que você fez e compartilhe seu código em um repositório público do github.

### Semana 2

- [ ] Criação dos endpoints para criar, ler e excluir
- [ ] Para cada entidade
- [ ] Utilizando TDD
- [ ] Utilizando padrões de projeto (utilizar pelo menos um padrão comportamental)

### Semana 3

- [ ] Criação da autenticação via API
- [ ] Criação de uma aplicativo web com Angular 8 ou superior
- [ ] Você deve usar um pré-processador CSS
- [ ] Criação da página de login

### Semana 4

- [ ] O aplicativo web deve ter um menu com duas opções:
  - [ ] Gerenciamento de Categoria
  - [ ] Dispositivo Gestão
  
### Semana 5
  
- [ ] Implante seu projeto em um provedor de nuvem (AWS, GCP, Heroku ou qualquer outro) e envie a URL do seu aplicativo da web e a URL do seu repositório GIT.
- [ ] AWS é o preferido. Nossa recomendação é se inscrever para uma conta gratuita e usar:
  - [ ] Uma instância T2 micro EC2 (para back-end)
  - [ ] Uma micro instância RDS T2 (para banco de dados)
  - [ ] O front-end pode ser implantado no bucket estático do S3 ou na mesma instância do EC2 usada para o back-end (para evitar custos adicionais).
- [ ] Caso o projeto não possa ser implantado, ele deve estar pronto para ser executado e instalado em uma máquina Linux Ubuntu 18. O processo de avaliação seria:
- [ ] Clone o repositório. (crie o banco de dados local com base no script
  fornecido). Execute front-end e back-end localmente.
