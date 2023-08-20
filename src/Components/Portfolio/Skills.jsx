import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5,faCss3Alt,faJs ,faReact,faNodeJs} from "@fortawesome/free-brands-svg-icons";
import expressjs from "../../assets/expressjs.svg"
const Skills = () => {
  return (
    <div id="skills" className="pl-5">
      <h1 className="text-white text-5xl font-bold mb-10">Skills</h1>
      <div className="text-white mb-10">
        <div >
          <h1 className="text-3xl mb-5">Web Development</h1>
          <ul className="flex justify-evenly items-center">
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faHtml5} className="fa-2x text-orange-500 hover:text-[#3a86ff]" /><span>HTML</span></li>
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faCss3Alt} className="fa-2x text-blue-500 hover:text-[#3a86ff]" /><span>CSS</span></li>
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faJs} className="fa-2x text-yellow-500 hover:text-[#3a86ff]" /><span>JavaScript</span></li>
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faReact} className="fa-2x text-blue-400 hover:text-[#3a86ff]" /><span>ReactJs</span></li>
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faNodeJs} className="fa-2x text-green-400 hover:text-[#3a86ff]" /><span>NodeJs</span></li>
            <li className="flex flex-col items-center space-y-3"><img src={expressjs} width={40}></img><span>ExpressJS</span></li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Skills