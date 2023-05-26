//Importar paquetes requeridos de node
const {response}= require('express')


//Importacion de los modelos 
const Ambiente=require('../models/ambiente')

//insercion, modificacion de datos

//consultar
const ambienteGet = async(req, res = response)=>{
    const{nombreUsuario}= req.query // desestructuracion obtiene lo que se manda del navegador

   const ambientes = await Ambiente.find()
   res.json({
    ambientes
   })
}


const ambientePost = async (req, res = response) => {
    try {
        // Capturar atributos o parámetros
        const body = req.query;
        
        // Instanciar el objeto
        const ambiente = new Ambiente(body);

        // Guardar objeto
        await ambiente.save();

        res.json({
            msg: 'La inserción se efectuó exitosamente'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'La inserción no fue exitosa. Ocurrió un error.'
        });
    }
};


module.exports={
    ambienteGet,
    ambientePost
}
