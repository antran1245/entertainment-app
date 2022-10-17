import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap'
import Navigation from './components/Navigation'
import search from '../src/assets/icon-search.svg'
import './App.css'
import '../src/sass/app.scss'

function App() {
  return (
    <Container fluid className='home'>
      <Row>
        <Col lg={1} className={"pt-4 ps-4 me-lg-5 me-xl-2 me-xxl-0"}>
          <Navigation/>
        </Col>
        <Col className='pt-5 ms-lg-3 ms-xl-3 me-xxl-1'>
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

export default App;
