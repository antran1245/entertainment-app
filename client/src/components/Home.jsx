import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './SearchBar'
import '../sass/home.scss'

export default function Home() {
    return(
        <Container fluid id='home'>
            <SearchBar/>
            <Row id='trending'>
                <Col>
                    hi
                </Col>
            </Row>
        </Container>
    );
}