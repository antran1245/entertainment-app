import { useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import bookmarkFull from '../assets/icon-bookmark-full.svg'
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import categoryMovie from '../assets/icon-category-movie.svg'
import categoryTV from '../assets/icon-category-tv.svg'
import play from '../assets/icon-play.svg'
import '../sass/gallerycard.scss'

export default function GalleryCard({item, image, bookmark, index}) {
    const [hovered, isHovered] = useState(false)

    return (
        <Col xs={6} sm={4} md={4} lg={3} xl={2}>
            <Card className='text-white border-0' onMouseOver={() => isHovered(true)} onMouseLeave={() => isHovered(false)}>
                <Card.Img variant="top" src={require("../assets/thumbnails"+image)} alt={item.title} className={hovered && 'overlay'}/>
                <Card.ImgOverlay>
                    <Card.Text className='play'>
                        <img src={play} alt="play"/> Play
                    </Card.Text>
                    <Card.Text className="bookmark" onClick={() => bookmark(index)}>
                        <img src={item.isBookmarked? bookmarkFull : bookmarkEmpty} alt="bookmark"/>
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Text className="card-info">
                        <span className="info">
                            <span>2019</span>
                            <span>&#183;</span>
                            <span className='catergory'>
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
    )
}