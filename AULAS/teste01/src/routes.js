const { Router } = require('express');
const User = require('./models/User.js')

const UserController = require ('./controller/UserController')

const router = Router()
// essa variável router contém todos os métodos HTTP

router.post('/user-create', UserController.createuser )
router.put('/user-update/:id', UserController.updateUser )
router.get('/user-list', UserController.listUsers )
router.delete('/user-delete/:id', UserController.deleteUser )


module.exports = router;
