import React, { createContext, useState } from 'react'
import { LoggedInUserType } from '../types/LoggedInUserType';


export const AuthContext = createContext<any | null>(null);

const AuthContextProvider = ({ children }: any) => {

    const authDetails = {
        username: "David",
        password: ""
    }
    const [userInfo, setUserInfo] = useState<LoggedInUserType | null>(authDetails);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [token, setToken] = useState<String>("");
    const [auth, setAuth] = useState<any>({});

    const login = () => {
        fetch(`loginUrl`).then((response) => {
            setIsAuth(true);
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const logout = () => {
        fetch(`logoutUrl`).then((response) => {
            console.log(response);
            setIsAuth(false);
        }).catch((error) => {
            console.log(error);
        })
    }

    const value = {
        userInfo,
        setUserInfo,
        isAuth,
        setIsAuth,
        login,
        logout,
        token,
        setToken,
        auth,
        setAuth
    };

    return (
        <AuthContext.Provider value={value as any}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider