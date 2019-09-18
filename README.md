# Desafio proposto aos **Candidatos à vaga de Desenvolvedor Backend Editora CEV.**
##### set/2019 

detalhamento do desafio: https://github.com/smartercode/backend-test

Para o esse projeto, usei o **DOCKER** e ele deve estar intalado ou gerar um database no postgres físico.

**Após o Docker instalado:**
Gerando uma imagem do postgres com o docker para testes da ZSSN (Rede Social de Sobrevivência Zumbi).
Em um terminal rode o camando abaixo:
###### docker run --name ZSSN -e POSTGRES_PASSWORD=desafiocev -p 5432:5432 postgres 

Após isso a imagem estará instalada e rodando pronta para uso.
#### Dicas:
  - para parar, basta um CTRL+C
  - para iniciar novamente, rode o comando no terminal: **docker start ZSSN**

#### Dados para a conexão com banco de dados via postBird
  host: "localhost"
  port: 5432
  username: "postgres"
  password: "desafiocev"

#### Para visualizar os dados diretamente no banco de dados pode se usar o **postBird**
#### Crie o database: **"zssn"**, pode ser usado outra ferramenta como o pgAdmin. Em outro terminal, acesse a pasta onde o projeto está salvo na sua máquina.

###### cd /suaPastaOndeEstaOProjeto/

### Rode agora os comandos:
###### yarn     //vai instalar as dependencias do projeto
###### yarn dev //vai rodar o backend

### Para testar e dar entrada nos dados no backend usei o inmisona
###### link: https://insomnia.rest/download/

### mensagem de boas vindas para a rota raiz
###### http://localhost:3344/

## No insomnia crie as requests (CRUD)

#### Crie uma request, pode chama-la de **CreateSurvivors**
method POST com o body em Json

###### create new survivors e yours itens (water...)
rota: /survivor

corpo body:

{
    "name": "Losangelo Pacífico",
    "age": 45,
    "gender": "M",
    "latitude": "-34.10414900000",
    "longitude": "-42.72417000000",
    "infections": 0,
    "infected": false,
    "water": 1,
    "ammunition": 3,
    "medication": 3,
    "food": 5,
    "infection_attested_for": null
}

#### Crie uma request, pode chama-la de **ListSurvivors**
method GET  sem corpo body 

###### list all survivor no infecteds
rota: /survivors

sem corpo body
###### retorna uma lista em json

#### Crie uma request, pode chama-la de **UpdateLongLatSurvivors**
method PUT com corpo body 

rota: /survivor/:id

com corpo body
{
	"latitude": -18.104149, 
	"longitude": -301.784170
}

 
#### declared e update survivor infected, crie uma request, pode chama-la de **ReportingInfecteds**
method PUT com corpo body 

rota: /survivor/:id/reportinfected/:infectedId

ex: http://localhost:3344/survivor/4/reportinfected/2
com corpo body

{	
	"infected": true	
}

-----
Uma particularidade no item onde um survivor marcado tres vezes por outros. como infected, para essa feature, foi estruturado de forma em que é preciso tres survivors distintos para poder marcar outro survivor como infected.
Sendo assim o mesmo survivor não poderá marcar outro survivor mais de uma vez.


---
Por:  Losangelo Pacífico **(86)9 8148-8472**
      e-mail: losangelo@gmail.com
      https://www.linkedin.com/in/losangelopacifico/
      https://github.com/Losangelo
