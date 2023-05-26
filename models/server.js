const express = require ('express')
const{dbConnection}= require('../database/config.js')


class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT//capturando variables
        this.ambientePath = '/api/ambiente'//ruta publica
        this.middlewares()//ayudas extras enlaces o puentes
        this.routes()//las rutas
        this.conectarDB()//conectarse a la base de datos
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));
    }

    routes(){
        this.app.use(this.ambientePath, require('../routes/ambientes'))
    }
    //asincronica porque no se sabe cuanto tiempo hay que esperar siempre hya que retornar con await

    async conectarDB(){
       await dbConnection() //esprando la conexion o respuesta del servidor
    }
}

module.exports = Server
