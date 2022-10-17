import { Container, Row, Col } from 'react-bootstrap'
import Navigation from './components/Navigation'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={1} className={"pt-4 ps-4 me-lg-5 me-xl-2 me-xxl-0"}>
          <Navigation/>
        </Col>
        <Col className='pt-5 ms-lg-3 ms-xl-3 me-xxl-1'>
          <Home/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
