# Link API Teste

## Ferramentas

 - **pipedrive**
    CRM focado em vendas

 - **bling**
    Sistema de gestão online

## Requisitos Funcionais

- Criar uma integração entre as plataformas **Pipedrive e Bling.** (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## Requisitos não funcionais

- Arquitetura RESTful

- Performance

- Git / Github

- Salvar os registros em um banco de dados MongoDB

## Detalhes do projeto

- A ideia inicial do projeto é **abrir uma thread** únicamente para o processo de integração, que ficará responsável por **realizar o processo de 2 em 2 minutos** liberando o fluxo principal para consultas http.

- Os controladores http não realizam processos diretamente de integração, servindo apenas para consulta. A integração é feita via thread.


## Antes de rodar

- Antes de rodar o projeto, **certifique-se de que modificou o arquivo com as variáveis de ambiete corretas**, pois a integração só acontecerá em ambientes de produção, por isso configure seu .env com a propriedade:
```
    NODE_ENV=production
```

- Certifique-se de ter o Nodejs na versão 14 LTS

## Como rodar

- Com o terminal dentro da pasta do projeto execute o comando:
```
    npm run start
```