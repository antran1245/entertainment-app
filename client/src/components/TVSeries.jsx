import { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { DataContext } from '../context/dataContext'
import Gallery from './Gallery'
import SearchBar from './SearchBar'

export default function TVSeries() {
    const [searching, setSearching] = useState('')
    const data = useContext(DataContext)
    const tvseries = data.data.filter((item) => item.category === "TV Series").filter((item) => item.title.toLowerCase().includes(searching.toLowerCase()))
    const imagesSmall = tvseries.map((item) => item.thumbnail.regular.small.slice(item.thumbnail.regular.small.split('/', 3).join('/').length))

    const bookmark = (index) => {
        let title = tvseries[index].title
        index = data.data.findIndex((item) => item.title === title)
        data.bookmark(index)
    }
    return(
        <Container fluid id="tvseries">
            <SearchBar setSearching={setSearching}/>
            <Gallery searching={searching} gallery={tvseries} imagesSmall={imagesSmall} bookmark={bookmark} heading={"TV Series"}/>
        </Container>
    )
}