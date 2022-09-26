const mongoose = require('mongoose')
const Filme = mongoose.model('Filme', {
    titulo: String,
    tipo: String,
    capa: String,
    logo: String,
    thumb: String,
    descricao: String,
    gerenos: Array,
    elenco: Array,
    // atores: Array,
    cenas_momentos: Array,
});
module.exports = Filme;
 