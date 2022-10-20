import { Row, Col, Card } from "react-bootstrap";
import bookmarkFull from '../assets/icon-bookmark-full.svg'
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import '../sass/gallery.scss'

export default function Gallery() {
    return(
        <Row id="gallery">
            <Row>
                <h2>Recommended for you</h2>
            </Row>
            <Row id="gallery-content">
                {(new Array(8).fill(0)).map((item, index) => {
                    return <Col sm={3} key={index}>
                        <Card className='text-white border-0'>
                            <Card.Img variant="top" src={require("../assets/thumbnails/112/regular/small.jpg")} alt="112"/>
                            <Card.ImgOverlay>
                                <Card.Text className="bookmark">
                                    <img src={bookmarkEmpty} alt="bookmark"/>
                                </Card.Text>
                            </Card.ImgOverlay>
                            <Card.Body>
                                <Card.Text className="card-info">
                                    <span className="info">
                                        <span>2019</span>
                                        <span>&#183;</span>
                                        <span>Movie</span>
                                        <span>&#183;</span>
                                        <span>PG</span>
                                    </span>
                                    <span className="title">112</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </Row>
    );
}