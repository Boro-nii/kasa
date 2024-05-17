import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import bannerImage from '../../assets/bannerMontagne.webp'
import { aboutList } from '../../datas/aboutList'
import './Informations.scss'

function Informations(){
    return(
        <section className='info'>
            <Banner backgroundImage={bannerImage} alt="paysage vallée montagneuse" />
            <div className='info__collapses'>
            {
                aboutList.map((elem, index)=>
                    <Collapse key={elem.title+index} title={elem.title} contentString={elem.content}/>
                )
            }
            </div>
        </section>
    )
}

export default Informations