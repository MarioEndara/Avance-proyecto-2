import storeAuth from "../context/storeAuth"
import { Navigate } from "react-router"


const ProtecteRoute = ({children}) => {
    const token = storeAuth(state=> state.token)
    
    return token ? children : <Navigate to="/login"/> 
}


export default ProtecteRoute