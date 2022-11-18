import { useContext } from 'react';
import { AuthContext } from "./Auth.context";

const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) throw new Error('Auth Context must be use inside provider');
    return authContext;
};

export default useAuth;
