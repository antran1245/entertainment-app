import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './context/dataContext';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Movies from './components/Movies';
import TVSeries from './components/TVSeries';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col md={12} lg={1} xl={1} xxl={1} className={"pt-0 pt-sm-3 pt-lg-3 p-lg-0 nav-col d-flex justify-content-center"}>
            <Navigation/>
          </Col>
          <Col md={12} lg={11} xl={11} xxl={11} id='main-content p-0'>
            <Context>
                <Routes>
                  <Route path='' element={<Home/>}/>
                  <Route path='movies' element={<Movies/>}/>
                  <Route path='tvseries' element={<TVSeries/>}/>
                </Routes>
            </Context>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
