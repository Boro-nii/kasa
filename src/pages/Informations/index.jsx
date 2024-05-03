import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import bannerImage from '../../assets/bannerMontagne.webp'
import { aboutList } from '../../datas/aboutList'
import './Informations.scss'

function Informations(){
    return(
        <section className='info'>
            <Banner backgroundImage={bannerImage} />
            <div className='info__collapses'>
            {
                aboutList.map((elem)=>
                    <Collapse title={elem.title} content={elem.content}/>
                )
            }
            </div>
        </section>
    )
}

export default Informations