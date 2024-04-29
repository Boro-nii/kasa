import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import bannerImage from '../../assets/bannerMontagne.webp'
import { aboutList } from '../../datas/aboutList'

function Informations(){
    return(
        <section className='info'>
            <Banner backgroundImage={bannerImage} />
            {
                aboutList.map((elem)=>
                    <Collapse title={elem.title} content={elem.content}/>
                )
            }
        </section>
    )
}

export default Informations