const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuario')

router.post('/login', async (req, res) => {
    try {
        const credenciais = req.body
        const usuario = await Usuario.findOne(credenciais)
        if(usuario){
            res.json({error: false, usuario})
        }else{
            res.json({error: true, message:'Nenhum usuário encontrado'}) 
        }    
     } catch (err) {
        res.json({error: true, message: err.message})
     }
})

router.patch('/cadastro/:id', async (req, res) => {
    try {
       const id = req.params.id;
       const UpdateClient = await Usuario.findByIdAndUpdate(id,req.body,{new: true})
       res.status(200).json({error: false, UpdateClient}) 
    } catch (err) {
       res.status(500).json({error: true, message: err.message}) 
    }
})
module.exports = router;