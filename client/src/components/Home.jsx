import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import Trending from './Trending'
import Gallery from './Gallery'
import '../sass/home.scss'

export default function Home() {
    const [searching, setSearching] = useState('')
    return(
        <Container fluid id='home'>
            <SearchBar setSearching={setSearching}/>
            {searching === '' && 
                <Trending/>
            }
            <Gallery searching={searching}/>
        </Container>
    );
}