import { useContext, useState, useEffect } from 'react'
import { Row, Card } from 'react-bootstrap'
import { DataContext } from '../context/dataContext'
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../assets/icon-bookmark-full.svg'
import categoryMovie from '../assets/icon-category-movie.svg'
import categoryTV from '../assets/icon-category-tv.svg'
import '../sass/trending.scss'

export default function Trending() {
    const trending = useContext(DataContext)
    const [isTrending, setIsTrending] = useState(trending.data.filter((item) => item.isTrending))
    const imagesSmall = isTrending.map((item) => item.thumbnail.trending.small.slice(item.thumbnail.trending.small.split('/',3).join('/').length))
    const [changeBookmark, setChangeBookmark] = useState(true)

    useEffect(() => {
        setIsTrending(trending.data.filter((item) => item.isTrending))
    }, [changeBookmark])

    const bookmark = (index) => {
        let bookmark = isTrending[index]
        let trendIndex = trending.data.findIndex((item) => item.title === bookmark.title)
        trending.bookmark(trendIndex)
        setChangeBookmark(!changeBookmark)
    }

    return(
        <Row id='trending'>
            <div>
                <h2>Trending</h2>
            </div>
            <div id='trending-content' className='ps-0'>
                {isTrending.length > 0 && isTrending.map((item, index) => {
                    return <Card className='bg-dark text-white' key={index}>
                        <Card.Img src={require('../assets/thumbnails'+imagesSmall[index])} alt={item.title} height="100%"/>
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
                })}
            </div>
        </Row>
    )
}