<h1 align="center">Support Chat apiRestFull with WebSocket</h1>

<p align="center">
  <a href="#-tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Installation and run">Installation and run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Usage programs">Usage programs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-ApiRestFull documentation">ApiRestFull documentation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-License">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

</p>

<br>

## technologies 🐱‍🏍🎂
- yarn and npm
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)

## 💻 Project

RestFul API for chat support, with websocket

## Installation and run

```yarn 
git clone https://github.com/Colgate13/SupportChat-ApiRestul-WS.git
yarn 
yarn typeorm migration:run
yarn dev
$ > Server is running in 3333!
```

## Usage programs

For send JSON and request's ->  install  [insomnia](https://insomnia.rest/)

For acess SQLlite(Data base) -> install  [Beekeeper Studio](https://www.beekeeper.io/)


## ApiRestFull documentation 
```nodejs APIrestFull WITH Insomnia 

(POST)localhost/users ->
--Create user

request(JSON)
{ 
	"email": "gabreilbarros13@gmail.com",
}

response(JSON)
{
  "id": "d6df7eb7-e41f-44b9-88f4-fa22bc9319ef",
  "email": "gabdddigabi@gmail.com",
  "updated_at": "2021-04-25T23:41:27.000Z",
  "created_at": "2021-04-25T23:41:27.000Z"
}

(POST)localhost/settings ->
--Create Setings Admin

request(JSON)
{	
	"chat": true,
	"username": "admin"
}

response(JSON)
{
  "id": "d93c973e-62dc-4a04-b6a2-57957a02067d",
  "username": "admin",
  "chat": true,
  "updated_at": "2021-04-25T23:41:32.000Z",
  "created_at": "2021-04-25T23:41:32.000Z"
}



(POST)localhost/settings/admin ->
--Config View of chat

request(JSON)
{ 
	"chat": true
}

response(JSON)
{
  "message": "Success in Update in User -> admin"
}



(POST)localhost/messages -> 
--Send message

request(JSON)
{
	"user_id": "b3a5bf11-1550-4353-b666-9c55a0bd23a4",
	"text": "Hello are you need help?",
	"admin_id": "571c037e-c1be-4269-a6fa-c01a5c218364"
}

response(JSON)
{
  "id": "d096e7ec-cc97-4e8f-9f2f-fe6a39ac1d5e",
  "admin_id": "571c037e-c1be-4269-a6fa-c01a5c218364",
  "text": "Hello are you need help?",
  "user_id": "b3a5bf11-1550-4353-b666-9c55a0bd23a4",
  "created_at": "2021-04-22T16:37:23.000Z"
}

(GET)localhost/messages/:user_id -> 
--List of messages

request(JSON)


response(JSON)
[
 {
    "id": "d096e7ec-cc97-4e8f-9f2f-fe6a39ac1d5e",
    "admin_id": "571c037e-c1be-4269-a6fa-c01a5c218364",
    "text": "Hello are you need help?",
    "user_id": "b3a5bf11-1550-4353-b666-9c55a0bd23a4",
    "created_at": "2021-04-22T16:37:23.000Z"
  }
]


```


## License

MIT [LICENSE](LICENSE.md)
