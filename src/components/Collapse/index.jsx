import { useState } from "react"
import Arrow from '../../assets/arrow.png'

function Collapse({title, content}){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <dl className="collapse">
            <dt className="collapse__dt">{title}
                <button className={isOpen ? "collapse__dt__button collapse__dt__button--open" : "collapse__dt__button" } onClick={(e) => {
                    setIsOpen(!isOpen)
                }}>
                    <img className="collapse__dt__button__img" src={Arrow} alt="bouton fleche" />
                </button>
            </dt>
            {isOpen && <dd className="collapse__dd">{content}</dd>}
        </dl>
    )
}

export default Collapse