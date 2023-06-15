import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <UserContext.Provider value={{ user, setUser, isSignedIn, setIsSignedIn }}>
            {children}
        </UserContext.Provider>
)}
