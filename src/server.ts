import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';


// inicia o dotenv pra rodar as variáveis de ambiente
dotenv.config();

// inicia o servidor...
const server = express();

// define a engine mustrache pra trabalhar com html
server.set('view engine', 'mustache');

// seta as pastas de view 
server.set('views', path.join(__dirname, 'views'));

// seta a engine mustache
server.engine('mustache', mustache());

// seta a pasta public dos arquivos html e css 
server.use(express.static(path.join(__dirname, '../public')));


// Rotas
server.use(mainRoutes);

// rota não encontrada

server.use((req,res)=>{
    res.render('pages/404');
});
// inicia o servidor
server.listen(process.env.PORT);

