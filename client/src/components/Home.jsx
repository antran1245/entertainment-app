import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import Trending from './Trending'
import '../sass/home.scss'

export default function Home() {
    return(
        <Container fluid id='home'>
            <SearchBar/>
            <Trending/>
        </Container>
    );
}