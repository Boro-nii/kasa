import Banner from "../../components/Banner";
import Card from "../../components/Card";
import annonces from '../../datas/annonce.json';
import bannerImage from '../../assets/bannerBackgound.webp'

function Home() {

  const bannerTitre = "Chez vous, partout et ailleurs"

  return (
  <section className="home">
    <Banner backgroundImage={bannerImage} titre={bannerTitre} />
    <div className="home__div">
    {
      annonces.map((annonce)=>
        <Card title={annonce.title} cover={annonce.cover} key={annonce.id} />
      )
    }
    </div>
  </section>
  )
}

export default Home;