import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import './App.css'
import Context from './context/dataContext';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={12} lg={1} xl={1} xxl={1} className={"pt-lg-3 p-lg-0 nav-col d-flex justify-content-center"}>
          <Navigation/>
        </Col>
        <Col md={12} lg={11} xl={11} xxl={11} id='main-content p-0'>
          <Context>
            <BrowserRouter>
              <Routes>
                <Route path='' element={<Home/>}/>
              </Routes>
            </BrowserRouter>
          </Context>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
