import express from "express";
import session from "express-session";
import rotaLogin from "./Rotas/RotaLogin.js";
import autenticar from "./seguranca/Autenticacao.js";

const host = '0.0.0.0';
const porta = 3223;
const app = express();

app.use(session({
    secret: 'MinhACh4veS3crEt4',
    resave: true,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 30
    }
}))

app.use(express.urlencoded({extended: false}));
app.use(express.static('./publico'))
app.use(autenticar,express.static('./privado'));
app.use('/login', rotaLogin)



app.listen(porta, host, () => {
    console.log('Servidor excutando em', host, porta);
})
