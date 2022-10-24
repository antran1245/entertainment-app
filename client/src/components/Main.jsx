import { Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Movies from './Movies';
import TVSeries from './TVSeries';
import Bookmark from './Bookmark';

export default function Main() {
    return(
        <Row>
            <Col md={12} lg={1} xl={1} xxl={1} className={"pt-0 pt-sm-3 pt-lg-3 p-lg-0 nav-col d-flex justify-content-center"}>
                <Navigation/>
            </Col>
            <Col md={12} lg={11} xl={11} xxl={11} id='main-content p-0'>
                <Routes>
                    <Route path='' element={<Home/>}/>
                    <Route path='movies' element={<Movies/>}/>
                    <Route path='tvseries' element={<TVSeries/>}/>
                    <Route path='bookmark' element={<Bookmark/>}/>
                </Routes>
            </Col>
        </Row>
    )
}