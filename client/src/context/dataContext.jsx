import { createContext, useState, useEffect, useContext, useMemo } from 'react'
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

    useMemo(() => {
        if(user !== null) {
            console.log('login ',  user)
            setBookmarkData(user.bookmark)
        }
    }, [user])

    const bookmark = (index) => {
        console.log(data[index], user)
        if(data[index]._id && user._id) {
            fetch('http://localhost:8000/api/videos/bookmark', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({videoID: data[index]._id, userID: user._id})
            })
            .catch(err => console.log(err))
        }
        // data[index].isBookmarked = data[index].isBookmarked === true? false : true
        // setData([...data])
    }
    return (
        <CreateDataContext.Provider value={{data, setData, bookmark}}>
            {children}
        </CreateDataContext.Provider>
    )
}