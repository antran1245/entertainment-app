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
            fetch(`http://localhost:8000/api/videos/bookmark/${user._id}`)
            .then(resp => resp.json())
            .then(data => {
                for(const item of data.bookmark) {
                    item.isBookmarked = true
                }
                setBookmarkData(data.bookmark)})
            .catch(err => console.log(err))
        }
    }, [user])

    const bookmark = (index) => {
        console.log(data[index], user)
        if(data[index]._id && user) {
            fetch('http://localhost:8000/api/videos/bookmark', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({videoID: data[index]._id, userID: user._id})
            })
            .catch(err => console.log(err))
        } else {
            console.log('not login')
        }
        // data[index].isBookmarked = data[index].isBookmarked === true? false : true
        // setData([...data])
    }
    return (
        <CreateDataContext.Provider value={{data, setData, bookmark, bookmarkData}}>
            {children}
        </CreateDataContext.Provider>
    )
}