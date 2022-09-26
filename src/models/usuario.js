const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuario', {
    nome: String,
    emai: String,
    senha: String
});
module.exports = Usuario;