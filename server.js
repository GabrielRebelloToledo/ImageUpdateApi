const express = require('express');
const multiParty = require('connect-multiparty');
const bodyParser = require('body-parser');
const fs = require ('fs');
cors = require('cors');

//criar o express app
const app = express();

app.use(multiParty());



/* Configure cors */
app.set('secret', 'aplicacao');

const corsOptions = {
    exposedHeaders: ['x-access-token']
};
app.use(cors(corsOptions));

/* Configure Token */
app.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log('####################################');
    if (token) {
        console.log('A token is send by the application');
        console.log('Token value is ' + token);
    } else {
        console.log('No token is send by the the application');
    }
    console.log('####################################');
    next();
});

//Porta do serviço
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// define um rota padrao

app.get('/', (req, res) => {
    res.send("Hello!!!")
});

app.get('/uploads/:imagem', (req,res)=>{

    var img = req.params.imagem

    /* console.log(img) */

    fs.readFile('./src/uploads/' + img, (err, conteudo)=>{
        if(err){
            res.status(400).json(err);
            return
        }
        res.writeHead(200, {'content-type':'image/jpg'})
        res.end(conteudo)
    })
})

//Require employee routes
const fotosRoutes = require('./src/routes/fotos.routes')
const login = require('./src/routes/login.routes')




//utilizando o middleware
 app.use('/api/receita', fotosRoutes) 
app.use('/api/logon', login)

//Ouvir
app.listen(port, () => {
    console.log(`Server online na porta ${port}`);
})