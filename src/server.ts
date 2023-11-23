//é um servidor web
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import express from 'express';
import path from 'path';
import LanceRouter from './routes/LanceRoutes';
import LeilaoRouter from './routes/LeilaoRoutes';
import UsuarioRouter from './routes/UsuarioRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', UsuarioRouter);
app.use('/', LeilaoRouter);
app.use('/', LanceRouter);
app.use(express.json());


app.listen(port, function(){
    console.log("Servidor funcionando normalmente...");
    console.log('Serve working on port -> ' + port);
})

//toda a requisicao que receber na raiz vai responder
app.get("/", async function(req, res){ //get pegar as coisas no servido
    
    res.sendFile(path.join(__dirname) + '/src/views/index.html');


    return res.send("Tudo ok ...");
})

app.post("/", async function(req, res){ // inserir as informações
    res.send("Uma requisição POST");
})

app.put("/", function(req, res){ // serve para atualizar as informações
    res.send("Uma requisição PUT");
})

app.delete("/", function(req, res){ // serve para deletar  as informações
    res.send("Uma requisição DELETE");
})

