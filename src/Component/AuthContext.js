import React, {useState} from 'react';

export const AuthContext = React.createContext();

export function AuthProvider(Props){
    const [auth, setAuth] = useState([]);

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {Props.children}
        </AuthContext.Provider>
    );

}
