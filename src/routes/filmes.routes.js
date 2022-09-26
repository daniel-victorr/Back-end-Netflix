const express = require('express')
const router = express.Router()
const Filme = require('../models/filme')
const Temporada = require('../models/temporada')
const _ = require('underscore')


//Recuperar tela home
router.get('/home', async (req, res) => {
    try {

      //Recuperando todos os filmes
      let finalFilmes = []
      let filmes = await Filme.find({})
   
      //Recuperando as temporadas dos filmes
      for( let filme of filmes ){
         let temporadas = await Temporada.find({
           filme_id: filme._id
         })
         //Adicionando as temporadas dos filmes em um array
        const newFilme = { ...filme._doc, temporadas}
        finalFilmes.push(newFilme); 
      }

      //Misturar resultados aleatóriamentes dos filmes 
      finalFilmes = _.shuffle(finalFilmes) // misturando os filmes

      //Definindo o filme principal
      const principal = finalFilmes[0]

      //Separar em seções
      const secoes = _.chunk(finalFilmes, 5)
      
      res.status(200).json({error: false, principal, secoes})

    } catch (err) {
       res.status(500).json({error: true, message: err.message})
    }
})

//Recuperar todos os Filmes 
  router.get('/', async (req, res)=>{
     try{
        const filme = await Filme.find({})
        res.status(200).json({error: false, filme: filme})
     }catch(err){
        res.status(500).json({error: true, message: err.message})
     }
  })
  
  
//Recuperar um filme pelo o id 
  router.get('/:id', async (req, res)=>{
     try {
        const id = req.params.id;
        const filme = await Filme.findById(id)
        res.status(200).json({error: false, filme})
     } catch (err) {
        res.status(500).json({error: true, message: err.message})
     } 
  })
  
  //Postar um filme
  router.post('/', async (req, res)=>{
    try {
      const filme = req.body;
      const response = await new Filme(filme).save();
      res.status(201).json({error: false, filme: response})
    } catch (err) {
      res.status(500).json({error: true, message: err.message})
    } 
  })

  //Atulizar um filme pelo id
 router.put('/:id', async (req, res)=>{
     try{
       const id = req.params.id;
       const newFilme = req.body;
       const filme = await Filme.findByIdAndUpdate(id, newFilme)
       res.status(200).json({error: false, filme})
     }catch(err){
       res.status(500).json({error: true, message: err.message})
     }
 })

 //Deletar um filme pelo id
  router.delete('/:id', async (req, res)=>{
     try {
       const id = req.params.id;
       const filme = await Filme.findByIdAndDelete(id)
       res.status(200).json({error: false, filme}) 
     } catch (error) {
       res.status(500).json({error: true, message: err.message}) 
     }  
  })
  
  module.exports = router;