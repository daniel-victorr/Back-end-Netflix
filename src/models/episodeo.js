const mongoose = require('mongoose')
const Episodeo = mongoose.model('Episodeo', {
    temporada_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Temporada'
    },
    titulo: String,
    descricao: String,
    capa: String,
    numero: String,
});
module.exports = Episodeo;
