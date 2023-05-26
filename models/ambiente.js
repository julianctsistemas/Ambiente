//Migracion 
const {Schema, model}=require('mongoose')


const AmbienteSchema = Schema({
    //se define tipos de datos
    nombreUsuario: {
    type: String,
    required: [true,'El campo nombre de usuario es requerido']
    },
    fecha: {
    type: Date,
    required: [true, 'La fecha es requerida']
    },
    hora: {
    type: String,
    required: [true, 'La hora es requerida']
    },
    temperatura: {
        type: Number,
        required: [true, 'La temperatura es requerida'],
        min: -5,
        max: 50
    },
    ambiente: {
        type: String,
        required: [true, 'El ambiente es requerido'],
        enum: ['701', '702', '703', '704', '705', '801', '802', '803', '804', '805']
    }

    })
//este es el nombre del objeto Ambiente
module.exports = model('Ambiente', AmbienteSchema)//Exportar el modelo

