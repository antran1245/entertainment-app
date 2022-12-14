import { useState, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { CreateDataContext } from "../context/dataContext"
import SearchBar from './SearchBar'
import Trending from './Trending'
import Gallery from './Gallery'

export default function Home() {
    const [searching, setSearching] = useState('')
    const data = useContext(CreateDataContext)
    const gallery = data.data.filter((item) => item.title.toLowerCase().includes(searching.toLowerCase()))
    const imagesSmall = gallery.map((item) => item.thumbnail.regular.small.slice(item.thumbnail.regular.small.split('/', 3).join('/').length))

    const bookmark = (index) => {
        data.bookmark(index)
    }

    return(
        <Container fluid id='home'>
            <SearchBar setSearching={setSearching}/>
            {searching === '' ?
                <Trending/> : null
            }
            <Gallery searching={searching} gallery={gallery} imagesSmall={imagesSmall} bookmark={bookmark} heading={"Recommended for you"}/>
        </Container>
    );
}