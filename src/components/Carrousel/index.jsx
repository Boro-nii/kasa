import { useState } from "react"
import arrowNext from "../../assets/arrow_next.png"
import arrowPrev from "../../assets/arrow_prev.png"
import './Carrousel.scss'

function Carrousel({images}){

    const [index, setIndex] = useState(0)

    return(
        <div className="carrousel">

            {images.length>1 &&
                <button className="carrousel__btn">
                    <img className="carrousel__btn__img" src={arrowPrev} alt="précedente"
                    onClick={() => {
                        index>0 ? setIndex(index-1) : setIndex(images.length-1)
                    }}
                    />
                </button>
            }

            <img className="carrousel__img" src={images[index]} alt="logement"/>

            {images.length>1 && <p className="carrousel__index">{(index+1)+"/"+(images.length)}</p>}

            {images.length>1 &&
                <button className="carrousel__btn">
                    <img className="carrousel__btn__img" src={arrowNext} alt="suivante" 
                    onClick={() => {
                        index<images.length-1 ? setIndex(index+1) : setIndex(0)
                    }} 
                    />
                </button>
            }

        </div>
    )
}

export default Carrousel