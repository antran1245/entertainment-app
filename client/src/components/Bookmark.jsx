import { useState, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { DataContext } from '../context/dataContext'
import Gallery from './Gallery'
import SearchBar from './SearchBar'

export default function Bookmark() {
    const [searching, setSearching] = useState('')
    const data = useContext(DataContext)
    const bookmark = data.data.filter((item) => item.isBookmarked).filter((item) => item.title.toLowerCase().includes(searching.toLowerCase()))
    const bookmarkMovie = bookmark.filter((item) => item.category === 'Movie')
    const bookmarkTVSeries = bookmark.filter((item) => item.category === 'TV Series')
    const imagesSmallMovie = bookmarkMovie.map((item) => item.thumbnail.regular.small.slice(item.thumbnail.regular.small.split('/', 3).join('/').length))
    const imagesSmallTVSeries = bookmarkTVSeries.map((item) => item.thumbnail.regular.small.slice(item.thumbnail.regular.small.split('/', 3).join('/').length))

    const bookmarking = (index) => {
        let title = bookmark[index].title
        index = data.data.findIndex((item) => item.title === title)
        data.bookmark(index)
    }
    return(
        <Container fluid id="bookmark">
            <SearchBar setSearching={setSearching}/>
            <Gallery searching={searching} gallery={bookmarkMovie} imagesSmall={imagesSmallMovie} bookmark={bookmarking} heading={"Bookmarked Movies"}/>
            <Gallery searching={searching} gallery={bookmarkTVSeries} imagesSmall={imagesSmallTVSeries} bookmark={bookmarking} heading={"Bookmarked TV Series"}/>
        </Container>
    )
}