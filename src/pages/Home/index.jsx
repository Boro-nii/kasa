import Banner from "../../components/Banner";
import Card from "../../components/Card";
import annonces from '../../datas/annonce.json';
import bannerImage from '../../assets/bannerBackgound.webp'
import { Link } from "react-router-dom";
import './Home.scss'

function Home() {

  const bannerTitre = "Chez vous, partout et ailleurs"

  return (
  <section className="home">
    <Banner backgroundImage={bannerImage} titre={bannerTitre} />
    <div className="home__div">
    {
      annonces.map((annonce)=>
        <Link className="link__card" to={`/logement/${annonce.id}`} key={annonce.id}>
          <Card {...annonce} key={annonce.id} />
        </Link>
      )
    }
    </div>
  </section>
  )
}

export default Home;