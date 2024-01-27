import { createContext } from "react";
import { useState  ,  useContext} from "react";
const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const login = (token) => {
        setAuthenticated(true);
        setUser(token);
    }
    const logout = () => {
        setAuthenticated(false);
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ authenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("You forgot to use AuthProvider");
    }
    return auth;
}
