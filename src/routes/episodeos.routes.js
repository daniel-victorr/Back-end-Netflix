const express = require('express')
const router = express.Router()
const Episodeo = require('../models/episodeo')

router.get('/temporada/:temporada', async (req, res)=>{
     try {
         const temporada_id = req.params.temporada;
         const episodeos = await Episodeo.find({
          temporada_id,
        })
        res.status(200).json({error: false, episodeos})
       } catch (err) {
        res.status(500).json({error: true, message: err.message})
       } 
})

module.exports = router
