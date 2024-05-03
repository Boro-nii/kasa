import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"

import Carrousel from "../../components/Carrousel"
import Collapse from "../../components/Collapse"
import Rating from "../../components/Rating"

import annonces from "../../datas/annonce.json"
import Thumbnail from "../../components/Thumbnail"

import './Logement.scss'

function Logement(){

    const param = useParams()
    const annonce = annonces.find((el) => el.id===param.id)

    return(      
        <section> 
            {
                (annonce===undefined 
                && <Navigate to="/404"/>)
                ||
                  
                <div>
                    <Carrousel images={annonce.pictures}/>
                    <div className="logement">
                        <div className="logement__left">
                            <h1 className="logement__left__h1">{annonce.title}</h1>
                            <p className="logement__left__p">{annonce.location}</p>
                            {
                                annonce.tags.map((tag)=>
                                    <span className="logement__left__tag" key={tag}>{tag}</span>
                                )
                            }
                        </div>
                        <div className="logement__right">
                            <Thumbnail name={annonce.host.name} picture={annonce.host.picture}/>
                            <Rating ratingValue={annonce.rating} />
                        </div>
                    </div>
                    <div className="logement__collapses">
                        <Collapse className="logement__collapses__collapse" title="Description" content={annonce.description}/>
                        <Collapse className="logement__collapses__collapse" title="Equipements" content={annonce.equipments}/>
                    </div>    
                </div>
            }
        </section>      
    )
}

export default Logement