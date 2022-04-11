import {Link } from "react-router-dom"
import '../styles/Navbar.css'
const Navbar = () => {
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/mision">Mision</Link></li>
                <li><Link to="/vision">Vision</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar