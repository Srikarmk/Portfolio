import './index.css'
import Nav from './Components/Nav';
import Home from './Components/Portfolio/Home';
import Skills from './Components/Portfolio/Skills';
import Projects from './Components/Portfolio/Projects';
import Footer from "./Components/Footer";
import Blogs from './Components/Portfolio/Blogs';
function App() {
  return(
    <div>
      <Nav className="sticky"></Nav>
    <div className='portbg overflow-x-hidden'>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
        <Blogs></Blogs>
        <Footer></Footer>
    </div>  
    </div>
  )
}

export default App
