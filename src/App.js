import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import './styles/app.css'
import Home from './pages/Home.jsx'
import Mision from './pages/Mision.jsx'
import Vision from './pages/Vision.jsx'
import Contact from './pages/Contact.jsx'

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/mision" element={<Mision/>}/>
                    <Route path="/vision" element={<Vision/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
    )

}
export default App;