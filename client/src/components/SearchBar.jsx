import { Row, Col, InputGroup, Form } from 'react-bootstrap'
import search from '../assets/icon-search.svg'
import '../sass/searchbar.scss'

export default function SearchBar({setSearching}) {
    return(
        <Row className='w-100'>
            <Col>
                <InputGroup className='searchbar'>
                <InputGroup.Text>
                    <img src={search} alt="search" />
                </InputGroup.Text>
                    <Form.Control placeholder='Search for movies or TV series' onChange={(e) => setSearching(e.target.value)}/>
                </InputGroup>
            </Col>
        </Row>
    );
}