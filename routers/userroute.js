const express = require('express')
const usercontrol = require('../controllers/usercontroller')
const userAuth = require('../middleware/userAuth')
const router = express.Router()

router.get('/', userAuth, usercontrol.getAllBooks)
router.get('/:code', userAuth, usercontrol.getBookByCode)
router.post('/', userAuth, usercontrol.addBook)
router.delete('/:code', userAuth, usercontrol.delBook)
router.put('/:code', userAuth, usercontrol.updateBook);
module.exports = router
