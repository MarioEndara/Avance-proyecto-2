import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const veterinarioSchema = new Schema({
    nombrePropietario:{
        type:String,
        require:true,
        trim:true
    },
    cedulaPropietario:{
        type:String,
        require:true,
        trim:true 
    },
    emailPropietario:{
        type:String,                  
        required:true,
        trim:true,
        unique:true,
    },
    nombreMascota:{
        type:String,                  
        required:true,
        trim:true
    },
    avatarMascota:{
        type:String,                  
        trim:true
    },
    tipoMascota:{
        type:String,                  
        required:true,
        trim:true
    },
    fechaNacimientoMascota:{
        type:Date,
        require:true,
        trim:true,
    },
    IngresoMascota:{
        type:Date,
        trim:true,
        default:null,
    },
    SalidaMascota:{
        type:Date,
        trim:true,
        default:null,
    },
    estadoMascota:{
        type:Boolean,
        default:true
    },
    rol:{
        type:string,
        default:"paciente"
    },
        veterinario:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Veterinario' 
        }
},
{
    timestamps:true

})

// Método para cifrar el password del propietario
pacienteSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

// Método para verificar si el password ingresado es el mismo de la BDD
pacienteSchema.methods.matchPassword = async function(password){
    return bcrypt.compare(password, this.passwordPropietario)
}

export default model('Paciente',pacienteSchema)