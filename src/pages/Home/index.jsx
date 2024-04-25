import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Annonce from '../../datas/annonce.json';
// import './Home.scss'

function Home() {
  return (
  <div>
    <Banner/>
    <section className="section">
    {
      Annonce.map((annonce)=>
        <Card title={annonce.title} cover={annonce.cover} key={annonce.id} />
      )
    }
    </section>
  </div>
  )
}

export default Home;