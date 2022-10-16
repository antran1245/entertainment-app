import { Row, Col } from 'react-bootstrap'
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
                    <img src={home} alt="home icon"/>
                    <img src={movies} alt="movies icon"/>
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