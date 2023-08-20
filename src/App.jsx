import './index.css'
import Nav from './Components/Nav';
import Home from './Components/Portfolio/Home';
import Skills from './Components/Portfolio/Skills';
import Projects from './Components/Portfolio/Projects';
function App() {
  return(
    <div className='h-[1500px]'>
      <Nav className="sticky"></Nav>
    <div className='portbg h-[100%]'>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
    </div>  
    </div>
  )
}

export default App
