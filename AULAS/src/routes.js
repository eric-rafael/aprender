const {Router} = require('express');

const router = Router(); 
// essa variável router contém todos os métodos HTTP

router.get('/', (req, res) => {
    res.json({ Hello: 'World!' });
});

module.exports = router;
