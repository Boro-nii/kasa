import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
// import './Header.scss'

function Header(){

    return(
        <header className='header'>
            <img src={Logo} alt='logo Kasa'></img>
            <nav>
                <Link className='header__a' to="/">Accueil</Link>
                <Link className='header__a' to="/informations">A Propos</Link>
            </nav>
        </header>
    )
}

export default  Header