import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap'
import search from '../assets/icon-search.svg'
import '../sass/home.scss'

export default function Home() {
    return(
        <Container fluid className='home'>
            <Row>
                <Col className='pt-5'>
                    <Row>
                        <Col>
                            <InputGroup className='searchbar'>
                                <InputGroup.Text>
                                    <img src={search} alt="search" />
                                </InputGroup.Text>
                                <Form.Control placeholder='Search for movies or TV series'/>
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}