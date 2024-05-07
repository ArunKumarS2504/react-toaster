const express = require('express')
const controller = require('../controller/usercontroller')


const route = express.Router();

route.post('/create',controller.create)
route.get('/getone/:id',controller.getOne)
route.get('/getall/:id',controller.getAll)
route.put('/update/:id',controller.update)
route.delete('/delete/:id',controller.deleteUser)


module.exports= route;