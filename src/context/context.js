
import { createContext } from "react";

const ContextDatas = createContext()

const AuthContext = createContext({
    isLogin: null,
    token: null,
    userInfo: null,
    setUserInfo: null,
    logIn: () => { },
    logOut: () => { }

})
export {ContextDatas, AuthContext} 