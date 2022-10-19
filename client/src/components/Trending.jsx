import { Row, Card } from 'react-bootstrap'
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../assets/icon-bookmark-full.svg'
import categoryMovie from '../assets/icon-category-movie.svg'
import data from '../data.json'
import '../sass/trending.scss'

export default function Trending() {
    const trending = data.filter((item) => item.isTrending)
    console.log(trending)

    return(
        <Row id='trending'>
            <div>
                <h2>Trending</h2>
            </div>
            <div className='trending-content'>
                <Card className='bg-dark text-white'>
                    <Card.Img src={require('../assets/thumbnails/112/regular/large.jpg')} alt="112" height="100%"/>
                    <Card.ImgOverlay>
                        <Card.Text className='bookmark'>
                            <img src={bookmarkEmpty} alt="bookmarkEmpty-icon"/>
                        </Card.Text>
                        <Card.Text className='card-info'>
                            <span className='info'>
                                <span>Hello</span>
                                <span>&#183;</span>
                                <span>Hello</span>
                                <span>&#183;</span>
                                <span>Hello</span>
                            </span>
                            <span className='title'>world</span>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </Row>
    )
}