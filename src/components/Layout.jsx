
import Header  from "./Header.jsx"
import Navbar from "./Navbar.jsx"
import Content from "./Content.jsx"
import Footer from "./Footer.jsx"
const Layout = ()=>{
    return(
        <div className="main">
            <Header/>
            <Navbar/>
            <Content/> 
            <Footer/>
        </div>
    )
}
 export default Layout