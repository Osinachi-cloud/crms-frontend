import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const UseAuth = () => {
    return useContext(AuthContext);
}