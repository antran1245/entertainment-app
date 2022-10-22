import { createContext, useState } from 'react'
import file from '../data.json'

export const DataContext = createContext();
export default function Context(props) {
    const [data, setData] = useState(file)

    const bookmark = (index) => {
        data[index].isBookmarked = data[index].isBookmarked === true? false : true
        setData([...data])
    }
    return (
        <DataContext.Provider value={{data, setData, bookmark}}>
            {props.children}
        </DataContext.Provider>
    )
}