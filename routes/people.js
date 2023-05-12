const express = require('express')
const router = express.Router()
const handlerPeople = require('./handler')


/* GET users listing. */
router.get('/', handlerPeople.get)
router.post('/', handlerPeople.create)
router.put('/:id', handlerPeople.update)
router.delete('/:id', handlerPeople.destroy)

module.exports = router
