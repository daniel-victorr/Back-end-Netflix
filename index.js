const express = require('express')  //Criando o primeiro servidor depois dos comandos: npm -y, npm install express
const morgan = require('morgan')
const bodyParser = require('body-parser')
const database = require('./src/services/database') 
const cors = require('cors') // Controlador 
const app = express()    //Essa constante possui tudo que está dentro da pasta express 

const FilmeRoutes = require('./src/routes/filmes.routes')
const UsuarioRoutes = require('./src/routes/usuarios.routes')
const episodeoRoutes = require('./src/routes/episodeos.routes')

// MIDLLEWARES
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

// ROUTES
app.use('/', FilmeRoutes)
app.use('/usuario', UsuarioRoutes)
app.use('/episodeo', episodeoRoutes)

//Agora vamos inicializar o nosso servidor informando a porta do servidor 3000 que é a porta do localhost
app.listen(3000, () => {
  console.log('Meu servidor está funcionando!')
})
