const database = require('../services/database')
const Filme = require('../models/filme')
const Temporada = require('../models/temporada')
const Episodeo = require('../models/episodeo')

const addTemporadaEpisodeo = ( async ()=>{
   try {
      const series = await Filme.find({tipo: 'serie'}).select('_id');
      for( let serie of series){
          console.log(`FILME ${serie} -----------`);
          const numTemporadas = Math.floor(Math.random() * 5) + 1;
          for(let i = 1; i <= numTemporadas; i++ ){
              console.log(`Inserindo temporada ${i} de ${numTemporadas}`)
              const temporada = await new Temporada({
                 filme_id: serie,
                 tittulo: `Temporada ${i}`
              }).save();

              const numEpisodeos = Math.floor(Math.random() * 5) + 1;
              for(let x = 1; x <= numEpisodeos; x++){
                console.log(`Inserindo episodeo ${x} de ${numEpisodeos}`) 
                await new Episodeo({
                   temporada_id: temporada._id,
                   titulo: `Episodio ${x}`,
                   numero: x,
                   descricao: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
                   capa: 'https://picsum.photos/300/200'
                }).save()
              }
          }
      }
    console.log('Final do script')
    } catch (err) {
      console.log(err.message)
   }
})

addTemporadaEpisodeo();