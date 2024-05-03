import Footer from "../Footer";
import Header from "../Header";

function Layout(props){

    return(
        <div>
            <Header />
            <main className="main">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout