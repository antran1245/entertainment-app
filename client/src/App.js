import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap'
import Navigation from './components/Navigation'
import search from '../src/assets/icon-search.svg'
import './App.css'
import '../src/sass/app.scss'

function App() {
  return (
    <Container fluid className='home'>
      <Row>
        <Col lg={2} className={"pt-4 ps-4 pe-0"}>
          <Navigation/>
        </Col>
        <Col className='pt-5 ps-0'>
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
