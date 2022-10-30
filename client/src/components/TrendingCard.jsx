import { Card } from "react-bootstrap"
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../assets/icon-bookmark-full.svg'
import categoryMovie from '../assets/icon-category-movie.svg'
import categoryTV from '../assets/icon-category-tv.svg'
import '../sass/trendingcard.scss'

export default function TrendingCard({item, image, bookmark, index}) {
    return (
        <Card className='bg-dark text-white' key={index}>
            <Card.Img src={require('../assets/thumbnails'+image)} alt={item.title} height="100%"/>
            <Card.ImgOverlay>
                <Card.Text className='bookmark' onClick={() => bookmark(index)}>
                    <img src={item.isBookmarked? bookmarkFull : bookmarkEmpty} alt="bookmarkEmpty-icon"/>
                </Card.Text>
                <Card.Text className='card-info'>
                    <span className='info'>
                        <span>{item.year}</span>
                        <span>&#183;</span>
                        <span className='catergory'>
                            <img src={item.category === "Movie"? categoryMovie : categoryTV} alt="category"/>
                            {item.category}
                        </span>
                        <span>&#183;</span>
                        <span>{item.rating}</span>
                    </span>
                    <span className='title'>{item.title}</span>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}