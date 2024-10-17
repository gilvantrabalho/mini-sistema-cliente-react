
# Iniciando o Projeto Laravel

Este documento fornece um guia passo a passo para clonar e iniciar o projeto Finance backend.

## Requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- [PHP](https://www.php.net/downloads) (versão 8.2 ou superior)
- [Composer](https://getcomposer.org/download/) (gerenciador de dependências para PHP)

## Passo a Passo para Clonar e Rodar o Projeto

### 1. Clonar o Repositório

Clone o repositório do GitHub para sua máquina local. No terminal, execute o seguinte comando:

```bash
git clone https://github.com/gilvantrabalho/mini-sistema-cliente-react
```

### 2. Navegar até o Diretório do Projeto

Após clonar, entre no diretório backend do projeto:

```bash
cd backend
```

### 3. Instalar Dependências

Instale as dependências do projeto usando o Composer:

```bash
composer install
```

### 4. Configurar o Ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Abra o arquivo `.env` em um editor de texto e configure as seguintes variáveis:

- **DB_CONNECTION**: `mysql`
- **DB_HOST**: O endereço do servidor do banco de dados (geralmente `127.0.0.1`).
- **DB_PORT**: A porta do banco de dados (geralmente `3306` para MySQL).
- **DB_DATABASE**: O nome do banco de dados que você deseja usar.
- **DB_USERNAME**: O nome de usuário do banco de dados.
- **DB_PASSWORD**: A senha do banco de dados.

### 5. Gerar a Chave da Aplicação

Execute o seguinte comando para gerar a chave da aplicação:

```bash
php artisan key:generate
```

### 6. Migrar o Banco de Dados

Execute o seguinte comando para criar as tabelas no banco de dados:

```bash
php artisan migrate
```

### 7. Rodar Seed

Execute o seguinte comando para criar as tabelas no banco de dados:

```bash
php artisan db:seed
```

### 8. Iniciar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento do Laravel, use:

```bash
php artisan serve
```

O aplicativo estará acessível em [http://localhost:8000](http://localhost:8000).

## Conclusão

Agora você deve ter seu projeto Laravel em funcionamento. Consulte a [documentação oficial do Laravel](https://laravel.com/docs) para obter mais informações sobre como desenvolver seu aplicativo.

### Problemas Comuns

- **Erro de conexão com o banco de dados**: Verifique suas configurações no arquivo `.env`.
- **Comandos Artisan não reconhecidos**: Certifique-se de estar no diretório correto do projeto.
