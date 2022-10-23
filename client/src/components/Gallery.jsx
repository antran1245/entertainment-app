import { Row, Col, Card } from "react-bootstrap"
import bookmarkFull from '../assets/icon-bookmark-full.svg'
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import categoryMovie from '../assets/icon-category-movie.svg'
import categoryTV from '../assets/icon-category-tv.svg'
import '../sass/gallery.scss'

export default function Gallery({searching, gallery, imagesSmall,  bookmark}) {
    return(
        <Row id="gallery">
            <Row>
                <h2>{searching === ''? 'Recommended for you' : `Found ${gallery.length} ${gallery.length > 1? 'results': 'result'} for '${searching}'`}</h2>
            </Row>
            <Row id="gallery-content">
                {gallery.map((item, index) => {
                    return <Col xs={6} sm={4} md={4} lg={3} xl={2} key={index}>
                        <Card className='text-white border-0'>
                            <Card.Img variant="top" src={require("../assets/thumbnails"+imagesSmall[index])} alt={item.title}/>
                            <Card.ImgOverlay>
                                <Card.Text className="bookmark" onClick={() => bookmark(index)}>
                                    <img src={item.isBookmarked? bookmarkFull : bookmarkEmpty} alt="bookmark"/>
                                </Card.Text>
                            </Card.ImgOverlay>
                            <Card.Body>
                                <Card.Text className="card-info">
                                    <span className="info">
                                        <span>2019</span>
                                        <span>&#183;</span>
                                        <span>
                                            <img src={item.category === "Movie"? categoryMovie : categoryTV} alt="category"/> {item.category === "Movie"? "Movie" : "TV Series"}
                                        </span>
                                        <span>&#183;</span>
                                        <span>{item.rating}</span>
                                    </span>
                                    <span className="title">{item.title}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </Row>
    );
}