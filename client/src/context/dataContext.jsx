import { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();
export default function Context(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/videos')
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }, [])

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