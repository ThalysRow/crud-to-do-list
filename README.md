# ADA Tech - módulo 2 - Projeto em Grupo

## Sobre o projeto

Utilizando os conceitos abordados ao longo do módulo, desenvolvemos uma aplicação de lista de tarefas (ToDo List).

<p align="center">
  <img alt="Preview do projeto desenvolvido." src="./preview/img1.png" width="85%">
</p>
<p align="center">
  <img alt="Preview do projeto desenvolvido." src="./preview/img2.png" width="85%">
</p>
<p align="center">
  <img alt="Preview do projeto desenvolvido." src="./preview/img3.png" width="85%">
</p>

## Funcionalidades
Cadastrar um usuário;
Login do usuário;
Adicionar uma tarefa;
Editar uma tarefa salva;
Remover uma tarefa salva;
Obter uma tarefa;
Listar todas as tarefas salvas.

## Requisitos

- Node.js;
- Insomnia (ou outra plataforma/cliente HTTP para envio de requisições HTTP);
- Beekeeper (ou outro gerenciador de Banco de Dados);
- PostgreSQL (ou outro Banco de Dados relacional).
- Utilizou-se como rota `http://localhost:3000/`

### POST `/user`

- Cadastrar um novo usuário.

#### Request body

```json
{
	"name":" Nome do Usuário ",
	"email":"user@gmail.com",
	"password":"12345678"
}
```
- Obs.: Verificação de validação para formato email e para password maior ou igual a 8 dígitos.

#### Response body

```json
{
	"id": 1,
	"name": "Nome do Usuário",
	"email": "user@gmail.com"
}
```

### POST `/login`

- Login de um usuário existente.

#### Request body

```json
{
	"email":"user@gmail.com",
	"password":"12345678"
}
```
- Obs.: Verificação de validação para usuário existente.

#### Response body

```json
{
	"userLogin": {
		"id": 1,
		"name": "Luis Carlos",
		"email": "luis@gmail.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA4MzY5NzM4LCJleHAiOjE3MDgzNzE1Mzh9.VnTygKpCGCEEUH19HWtC1M2PLaU5ubLJq3UKOpJ1bjc"
}
```
- Obs.: O token gerado que deve ser utilizado para autenticação (Bearer Token) nas próximas requisições.

### POST `/task`

- Adicionar uma tarefa.

#### Request body

```json
{
	"description":"Limpar a sala"
}
```

#### Response body

```json
{
	"message": "Task add successfully"
}
```

### PTCH `/task/id`

- Editar uma tarefa salva, através de um parâmetro (id).

#### Request body

```json
{
	"description":"Limpar o quarto"
}
```

#### No body returned for response

### DELETE `/task/id`

- Deletar uma tarefa salva, através de um parâmetro (id).

#### No request body

#### No body returned for response

### GET `/task/id`

- Obter uma tarefa, através de um parâmetro (id)

#### No request body

#### Response body

```json
{
	"task": {
		"id": 1,
		"description": "Limpar o quarto",
		"createat": "2024-02-17T03:00:00.000Z",
		"userid": 1
	}
}
```

### GET `/task`

- Listar todas as tarefas

#### No request body

#### Response body

```json
{
	"Task": [
		{
			"id": 1,
			"description": "Limpar o quarto",
			"createat": "2024-02-17T03:00:00.000Z",
			"userid": 1
		}
	]
}
```