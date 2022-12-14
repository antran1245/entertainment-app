import { useLayoutEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import home from '../assets/icon-nav-home.svg'
import movies from '../assets/icon-nav-movies.svg'
import tv from '../assets/icon-nav-tv-series.svg'
import bookmark from '../assets/icon-nav-bookmark.svg'
import '../sass/navigation.scss'

export default function Navigation() {
    const location = useLocation()

    //Scroll TO -100 on the y axis to make sure it return all the way to the top on every change of pathname
    useLayoutEffect(() => {
        window.scrollTo(0,-100)
    },[location.pathname])
    return(
        <nav id='navigation'>
            <div>
                <div className='logo'>
                    <NavLink to={''}>
                        <img src={logo} alt='logo icon'/>
                    </NavLink>
                </div>
                <div className='menu'>
                    <NavLink to={''} className={({isActive}) => isActive ? 'active' : ''} end>
                        <img src={home} alt="home icon"/>
                    </NavLink>
                    <NavLink to={'movies'} className={({isActive}) => isActive ? 'active': ''}>
                        <img src={movies} alt="movies icon"/>
                    </NavLink>
                    <NavLink to={'tvseries'} className={({isActive}) => isActive ? 'active': ''}>
                        <img src={tv} alt="tv icon"/>
                    </NavLink>
                    <NavLink to={'bookmark'} className={({isActive}) => isActive ? 'active': ''}>
                        <img src={bookmark} alt="bookmark icon"/>
                    </NavLink>
                </div>
            </div>
            <div className='avatar'>
                <NavLink to={'account'}>
                    <img src={require('../assets/image-avatar.png')} alt="avatar icon"/>
                </NavLink>
            </div>
        </nav>
    );
}