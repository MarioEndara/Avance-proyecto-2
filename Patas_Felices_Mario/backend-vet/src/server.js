// requerir módulos 
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerVeterinarios from './routers/veterinario_routers.js'



//  Incializaciones 
const app = express()
dotenv.config()


// Configuraciones
app.set('port', process.env.PORT || 3000)
app.use(cors())

// Middleware
app.use(express.json())


// Rutas
app.get('/',(req,res)=>{
    res.send("Sever on")
})

// Rutas para veterinarios
app.use('/api',routerVeterinarios)

// Rutas que no existen
app.use((req,res)=>{res.status(404).send("Endpoint no encontrado")})





// Exportar la instancia de express
export default app





