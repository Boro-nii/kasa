import Footer from "../Footer";
import Header from "../Header";

import './Layout.scss'

function Layout({children}){

    return(
        <div>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout