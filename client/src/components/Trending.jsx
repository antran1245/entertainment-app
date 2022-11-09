import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { DataContext } from '../context/dataContext'
import TrendingCard from './TrendingCard'
import '../sass/trending.scss'

export default function Trending() {
    const trending = useContext(DataContext)

    // Filter out all trending TV Series and Movies
    const isTrending = trending.data.filter((item) => item.isTrending)
    // Array of all images name, removing the path from the images name
    const imagesSmall = isTrending.map((item) => item.thumbnail.trending.small.slice(item.thumbnail.trending.small.split('/',3).join('/').length))

    // Find the index from the completed database
    const bookmark = (index) => {
        let bookmark = isTrending[index]
        let trendIndex = trending.data.findIndex((item) => item.title === bookmark.title)
        trending.bookmark(trendIndex)
    }

    return(
        <Row id='trending'>
            <div>
                <h2>Trending</h2>
            </div>
            <div id='trending-content' className='ps-0'>
                {isTrending.length > 0 ? isTrending.map((item, index) => {
                    return <TrendingCard item={item} image={imagesSmall[index]} bookmark={bookmark} index={index} key={index} />
                }): null}
            </div>
        </Row>
    )
}