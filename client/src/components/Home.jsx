import { Container, Row, Col, Card } from 'react-bootstrap'
import SearchBar from './SearchBar'
import '../sass/home.scss'

export default function Home() {
    return(
        <Container fluid id='home'>
            <SearchBar/>
            <Row id='trending'>
                <div>
                    <h2>Trending</h2>
                </div>
                <div className='trending-content'>
                    <Card className='bg-dark text-white'>
                        <Card.Img src={require('../assets/thumbnails/112/regular/large.jpg')} alt="112"/>
                        <Card.ImgOverlay>
                            <Card.Text>hi</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    
                </div>
            </Row>
        </Container>
    );
}