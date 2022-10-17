import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './SearchBar'
import '../sass/home.scss'

export default function Home() {
    return(
        <>
        <SearchBar/>
        <Container fluid id='home'>
            <Row>
                <Col>
                    <Home/>
                </Col>
            </Row>
        </Container>
        </>
    );
}