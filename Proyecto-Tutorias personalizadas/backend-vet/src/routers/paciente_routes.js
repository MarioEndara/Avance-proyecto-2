import {Router} from 'express'
import { detallePaciente, listarPacientes, registrarPaciente } from '../controllers/paciente_controller.js'
import { verificarTokenJWT } from '../middlewares/JWT.js'
const router = Router()


router.post("/paciente/registro", verificarTokenJWT, registrarPaciente)
router.get("/pacientes", verificarTokenJWT, listarPacientes)
router.get("/paciente/:id",verificarTokenJWT, detallePaciente)





export default router