import React, { useState, createContext } from "react";
import { AuthContextType, User } from "types";
import { loginRequest } from "./Auth.service";

interface AuthContextProviderProps {
    children: React.ReactElement;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    const userLogin = (email: string, password: string) => {
        try {
            setIsLoading(true);
            loginRequest(email, password)

        } catch (err: any) {
            setError(err.toString())
        }
        //   .then((u) => {
        //     setUser(u);
        //     setIsLoading(false);
        //   })
        //   .catch((e) => {
        //     setIsLoading(false);
        //     setError(e.toString());
        //   });
    };

    const userLogout = () => {
        setUser(null);
        console.log("Logout");
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                userLogin,
                userLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
