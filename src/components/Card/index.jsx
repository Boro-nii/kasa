// import './Card.scss'

function Card({title, cover}){
    return(
        <article className='card'>
            <img width="340px" height="340px" className='card__img' src={cover} alt={title} />
            <span>{title}</span>
        </article>
    )
}

export default Card