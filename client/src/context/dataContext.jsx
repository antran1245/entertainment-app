import { createContext, useState, useEffect } from 'react'

export const Context = createContext();
export default function DataContext({children}) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/videos')
        .then((resp) => resp.json())
        .then((data) => {
            data = data.map(item => item.isBookmarked === false)
            setData(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const bookmark = (index) => {
        data[index].isBookmarked = data[index].isBookmarked === true? false : true
        setData([...data])
    }
    return (
        <Context.Provider value={{data, setData, bookmark}}>
            {children}
        </Context.Provider>
    )
}