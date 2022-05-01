const { Router } = require('express');
const { User } = require('./models/User')

const router = Router()
// essa variável router contém todos os métodos HTTP

router.post('/', async (req, res) => {
    const { name, email } = req.body

    const user = await User.create({name, email})

    res.json({user})

});

module.exports = router;
