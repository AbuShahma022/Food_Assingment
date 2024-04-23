const express = require('express')
const Controller = require('../Controller/FoodController')

const router = express.Router()

router.post('/create',Controller.create)
router.get('/read',Controller.read)
router.post('/update/:id',Controller.update)

router.delete('/delete/:id', Controller.delete)
router.get('/readById/:id', Controller.readByid)

module.exports = router;