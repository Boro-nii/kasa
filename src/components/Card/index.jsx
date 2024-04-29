function Card({title, cover}){
    return(
        <article className='card'>
            <img width="340px" height="340px" className='card__img' src={cover} alt={title} />
            <p className='card__p'>{title}</p>
        </article>
    )
}

export default Card