const {Router} = require('express');

const {getUsers, signUp} = require('../controllers/userController')
const router = Router()

router.post('/sign-up', signUp)
router.get('/user', getUsers )

module.exports = router


