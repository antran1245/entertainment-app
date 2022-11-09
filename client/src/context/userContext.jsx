import { useState } from "react"
import { createContext } from "react"

export const Context = createContext()
export default function UserContext({children}) {
    const [user, setUser] = useState(null)

    return(
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}