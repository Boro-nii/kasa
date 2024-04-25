import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
        <header>
            <img src={Logo} alt='logo Kasa'></img>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/informations">A Propos</Link>
            </nav>
        </header>
    )
}

export default  Header