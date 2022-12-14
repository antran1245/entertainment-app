import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { CreateDataContext } from "../context/dataContext"
import Gallery from "./Gallery";
import SearchBar from "./SearchBar";

export default function Movies() {
    const [searching, setSearching] = useState('')
    const data = useContext(CreateDataContext)

    // Filter out all movies and further filter out by the search request
    const movies = data.data.filter((item) => item.category === "Movie").filter((item) => item.title.toLowerCase().includes(searching.toLowerCase()))
    const imagesSmall = movies.map((item) => item.thumbnail.regular.small.slice(item.thumbnail.regular.small.split('/', 3).join('/').length))

    const bookmark = (index) => {
        let title = movies[index].title
        index = data.data.findIndex((item) => item.title === title)
        data.bookmark(index)
    }
    return(
        <Container fluid id="movies">
            <SearchBar setSearching={setSearching}/>
            <Gallery searching={searching} gallery={movies} imagesSmall={imagesSmall} bookmark={bookmark} heading={"Movies"}/>
        </Container>
    )
}