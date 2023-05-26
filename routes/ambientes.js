

const {Router} = require('express')

const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{ambienteGet, ambientePost}=require('../controllers/ambiente')
route.get('/', ambienteGet)

route.post('/',ambientePost )

route.put('/', (req, res) => {
    res.json({
        msg: 'API PUT'
    })
})

route.delete('/', (req, res) => {
    res.json({
        msg: 'API DELETE'
    })
})
module.exports = route


