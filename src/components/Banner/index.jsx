import BackgroundImage from '../../assets/bannerBackgound.webp'
// import './Banner.scss'

function Banner(){
    return(
        <div className='banner'>
            <img width="1240xp" height="223px" className='banner__img' src={BackgroundImage} alt='paysage falaise'/>
            <p className='banner__p'>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner

