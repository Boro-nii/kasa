import LogoFooter from '../../assets/logo_footer.png'
import './Footer.scss'

function Footer(){
    return(
        <footer className='footer'>
            <img src={LogoFooter} alt='logo Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer