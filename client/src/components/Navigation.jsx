import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import home from '../assets/icon-nav-home.svg'
import movies from '../assets/icon-nav-movies.svg'
import tv from '../assets/icon-nav-tv-series.svg'
import bookmark from '../assets/icon-nav-bookmark.svg'
import '../sass/navigation.scss'

export default function Navigation() {
    return(
        <nav id='navigation'>
            <div>
                <div className='logo'>
                    <img src={logo} alt='logo icon'/>
                </div>
                <div className='menu'>
                    <Link to={'/'}>
                        <img src={home} alt="home icon"/>
                    </Link>
                    <Link to={'/movies'}>
                        <img src={movies} alt="movies icon"/>
                    </Link>
                    <img src={tv} alt="tv icon"/>
                    <img src={bookmark} alt="bookmark icon"/>
                </div>
            </div>
            <div className='avatar'>
                <img src={require('../assets/image-avatar.png')} alt="avatar icon"/>
            </div>
        </nav>
    );
}