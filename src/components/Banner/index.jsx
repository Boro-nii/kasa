import './Banner.scss'

function Banner({backgroundImage, titre}){
    return(
        <div className='banner'>
            <img width="1240xp" height="223px" className='banner__img' src={backgroundImage} alt='paysage falaise'/>
            <div className='banner__bg'>
                <p className='banner__bg__p'>{titre}</p>
            </div>
        </div>
    )
}

export default Banner

