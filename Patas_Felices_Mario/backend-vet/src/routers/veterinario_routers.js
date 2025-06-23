import {Router} from 'express'
import { comprobarTokenPassword, confirmarMail, crearNuevoPassword, recuperarPassword, registro, login, perfil } from '../controllers/veterinario_controller.js'
import { verificarTokenJWT } from '../middlewares/JWT.js'

const router = Router()


router.post('/registro',registro)


router.get('/confirmar/:token',confirmarMail)


router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPassword)
router.post('/nuevopassword/:token',crearNuevoPassword)
router.post('/login',perfil)

router.get('/perfil',verificarTokenJWT,perfil) //##########



export default router

