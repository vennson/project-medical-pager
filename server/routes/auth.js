import express from 'express'

import { signUp, logIn, testOne} from '../controllers/auth.js'

const router = express.Router()

router.post('/signUp', signUp)
router.post('/logIn', logIn)
router.get('/testOne', testOne)

export default router