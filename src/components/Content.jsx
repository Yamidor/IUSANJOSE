import {Outlet} from "react-router-dom"
import LogoIns from '../img/bandera.jpeg'
import '../styles/Content.css'
const Content = () => {
    return(
        <div className="content">
            <img src={LogoIns} alt="LogoIns" className="img-container"/>
            <div className="content-container">
                <Outlet/>
            </div>
        </div>
    )
}
export default Content