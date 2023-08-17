import './index.css'
import Nav from './Components/Nav';
import Home from './Components/Portfolio/Home';
import About from './Components/Portfolio/About';
import Skills from './Components/Portfolio/Skills';
import Projects from './Components/Portfolio/Projects';
function App() {
  return(
    <div>
      <Nav className="sticky"></Nav>
    <div className='portbg h-[100%]'>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
    </div>  
    </div>
  )
}

export default App
