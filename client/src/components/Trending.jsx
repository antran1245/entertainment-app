import { Row, Card } from 'react-bootstrap'
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../assets/icon-bookmark-full.svg'
import categoryMovie from '../assets/icon-category-movie.svg'
import categoryTV from '../assets/icon-category-tv.svg'
import data from '../data.json'
import '../sass/trending.scss'

export default function Trending() {
    const trending = data.filter((item) => item.isTrending)
    const imagesSmall = trending.map((item) => item.thumbnail.trending.small.slice(item.thumbnail.trending.small.split('/',3).join('/').length))
    console.log(trending)

    return(
        <Row id='trending'>
            <div>
                <h2>Trending</h2>
            </div>
            <div className='trending-content ps-0'>
                {trending.map((item, index) => {
                    return <Card className='bg-dark text-white' key={index}>
                        <Card.Img src={require('../assets/thumbnails'+imagesSmall[index])} alt="112" height="100%"/>
                        <Card.ImgOverlay>
                            <Card.Text className='bookmark'>
                                <img src={item.isBookmarked? bookmarkFull : bookmarkEmpty} alt="bookmarkEmpty-icon"/>
                            </Card.Text>
                            <Card.Text className='card-info'>
                                <span className='info'>
                                    <span>{item.year}</span>
                                    <span>&#183;</span>
                                    <span className='catergory'>
                                        <img src={item.category === "Movie"? categoryMovie : categoryTV}/>
                                        {item.category}
                                    </span>
                                    <span>&#183;</span>
                                    <span>{item.rating}</span>
                                </span>
                                <span className='title'>{item.title}</span>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                })}
            </div>
        </Row>
    )
}