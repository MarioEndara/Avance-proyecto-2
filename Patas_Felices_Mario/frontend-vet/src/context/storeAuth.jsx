import {create} from 'zustand'
import {persist} from "zustand/middleware"
// Crear la bolsa(variable global)
const StoreAuth = create(
    persist(
    set => ({
    token:null,
    rol:null,
    setToken:(token) => set({ token}),
    setRol: (rol) => set({rol}),
    clearToken: () => set({ token: null})
}),
{ name: "auth-token"}
)
)




export default StoreAuth;