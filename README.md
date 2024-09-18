# Angular18LogisticaApi

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.4.

## Frontend (Angular)

### Development server

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar algum dos arquivos de origem.

### Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Execute `ng build` para construir o projeto. Os artefatos da construção serão armazenados no diretório `dist/`.

### Running unit tests

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Execute `ng e2e` para executar os testes end-to-end usando uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente as capacidades de teste end-to-end.

### Further help

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

## Backend (ASP.NET Core)

### Requisitos

Certifique-se de ter o .NET 6 SDK instalado. Você pode verificar a versão instalada com o comando `dotnet --version`.

### Executar o Projeto

1. Navegue até o diretório do projeto backend.
2. Execute `dotnet run` para iniciar o servidor. A interface do Swagger estará disponível em `https://localhost:7057/swagger` por padrão.

### Comandos do Entity Framework

Para gerar e aplicar migrations no Entity Framework, siga os passos abaixo:
Usando o Package Manager Console (VisualStudio2022, 2019...)
1. **Gerar uma nova migration**:

   ```powershell
   Add-Migration Criacao-Inicial -Context DataContextApp

2. **Aplicar a migration**:

   ```powershell
   Update-Database -Context DataContextApp
