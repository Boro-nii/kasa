import { useParams } from "react-router-dom"

function Logement(){

    const param = useParams()
    
    return(
        <div>
            <h1>Ceci est le logement {param.id} </h1>
        </div>
    )
}

export default Logement