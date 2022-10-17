import { Row, Col, InputGroup, Form } from 'react-bootstrap'
import search from '../assets/icon-search.svg'
import '../sass/searchbar.scss'

export default function SearchBar() {
    return(
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
    );
}