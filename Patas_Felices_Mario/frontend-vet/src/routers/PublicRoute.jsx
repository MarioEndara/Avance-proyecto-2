import { Navigate, Outlet } from "react-router"
import StoreAuth from "../context/storeAuth"

const PublicRoute =() =>{
    const token = StoreAuth(state => state.token)
    return token ? <Navigate to="/dashboard" /> : <Outlet />

}
 export default PublicRoute