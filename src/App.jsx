import './index.css'
import Nav from './Components/Nav';
import Home from './Components/Portfolio/Home';
import Skills from './Components/Portfolio/Skills';
import Projects from './Components/Portfolio/Projects';
import Footer from "./Components/Footer";
function App() {
  return(
    <div>
      <Nav className="sticky"></Nav>
    <div className='portbg'>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
    </div>  
    </div>
  )
}

export default App
