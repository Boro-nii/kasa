import './Thumbnail.scss'

function Thumbnail({name, picture}){

    let fullName = name.split(" ")
    let firstName = fullName[0]
    let lastName = fullName[1]
 
    return(
        <div className="host">
            <div className="host__name">
                <p  className="host__name__p">{firstName}</p>
                <p  className="host__name__p">{lastName}</p>
            </div>
            <img className="host__img" src={picture} alt={name}/>
        </div>
    )
}

export default Thumbnail