import { useState } from "react"
import { createContext } from "react"

export const CreateUserContext = createContext()
export default function UserContext({children}) {
    const [user, setUser] = useState(null)

    return(
        <CreateUserContext.Provider value={{user, setUser}}>
            {children}
        </CreateUserContext.Provider>
    )
}