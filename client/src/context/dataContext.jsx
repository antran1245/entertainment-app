import { createContext, useState, useEffect, useContext } from 'react'
import { CreateUserContext } from './userContext';

export const CreateDataContext = createContext();
export default function DataContext({children}) {
    const {user} = useContext(CreateUserContext)

    const [data, setData] = useState([])
    const [bookmarkData, setBookmarkData] = useState([])

    // retrieve data by sending a fetch call to the database
    useEffect(() => {
        fetch('http://localhost:8000/api/videos')
        .then((resp) => resp.json())
        .then((data) => {
            //remove all default bookmark, map, filter, forEach does not work or cause errors
            for(const item of data) {
                item.isBookmarked = false
            }
            setData([...data])
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        if(user !== null) {
            setBookmarkData(user.bookmark)
        }
    }, [user])

    const bookmark = (index) => {
        data[index].isBookmarked = data[index].isBookmarked === true? false : true
        setData([...data])
    }
    return (
        <CreateDataContext.Provider value={{data, setData, bookmark}}>
            {children}
        </CreateDataContext.Provider>
    )
}