import LogoFooter from '../../assets/logo_footer.png'

function Footer(){
    return(
        <footer className='footer'>
            <img src={LogoFooter} alt='logo Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer