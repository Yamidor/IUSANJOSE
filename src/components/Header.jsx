import Logo from '../img/escudo.jpeg'
import '../styles/Header.css'
const Header = () => {
    return(
        <div className="header">
            <img src={Logo} alt="Logo" className="logo"/>
            <h1 className="title" >Institución Educativa Urbana San Jose</h1>
            <img src={Logo} alt="Logo" className="logo"/>
        </div>
    )
}
export default Header