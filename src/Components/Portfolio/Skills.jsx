import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5,faCss3Alt,faJs ,faReact,faNodeJs} from "@fortawesome/free-brands-svg-icons";
import expressjs from "../../assets/expressjs.svg"
import expo from "../../assets/expo.svg"
import c from "../../assets/c.svg"
import cpp from "../../assets/cpp.svg"
import py from "../../assets/python.svg"
import mysql from "../../assets/mysql.svg"
import mongodb from "../../assets/mongodb.svg"
import supabase from "../../assets/supabase.svg"
import tailwind from "../../assets/tailwindcss.svg"
const Skills = () => {
  return (
    <div id="skills" className="pl-5 mb-20">
      <h1 className="text-white text-5xl font-bold mb-10 flex justify-center">Skills</h1>
      <div className="text-white mb-10 space-y-20">
        {/* Web Development  */}
        <div className="space-y-10">
          <h1 className="text-3xl mb-5 flex justify-center">Web Development</h1>
          <ul className="flex justify-evenly items-center">
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faHtml5} className="fa-5x text-orange-500 hover:text-[#3a86ff]" /><span>HTML</span></li>
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faCss3Alt} className="fa-5x text-blue-500 hover:text-[#3a86ff]" /><span>CSS</span></li>
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faJs} className="fa-5x text-yellow-500 hover:text-[#3a86ff]" /><span>JavaScript</span></li>
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faReact} className="fa-5x text-blue-400 hover:text-[#3a86ff]" /><span>ReactJs</span></li>
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faNodeJs} className="fa-5x text-green-400 hover:text-[#3a86ff]" /><span>NodeJs</span></li>
            <li className="flex flex-col items-center space-y-3"><img src={expressjs} width={70}></img><span>ExpressJS</span></li>
            <li className="flex flex-col items-center space-y-3"><img src={tailwind} width={70}></img><span>Tailwind CSS</span></li>
          </ul>
        </div>

        {/* App Development  */}

        <div className="space-y-10">
          <h1 className="text-3xl mb-5 flex justify-center ">App Development</h1>
          <ul className="flex justify-evenly items-center">
            <li className="flex flex-col items-center space-y-3"><FontAwesomeIcon icon={faReact} className="fa-5x text-blue-400 hover:text-[#3a86ff]" /><span>React Native</span></li>
            <li className="flex flex-col items-center space-y-3"><img src={expo} width={70}/><span>Expo</span></li>
          </ul>
        </div>

        {/* Languages and Databases  */}
        <div className="space-y-10">
          <h1 className="text-3xl mb-5 flex justify-center">Programming Languages and Databases</h1>
          <ul className="flex justify-evenly items-center">
          <li className="flex flex-col items-center space-y-3"><img src={c} width={70}></img><span>C</span></li>
          <li className="flex flex-col items-center space-y-3"><img src={cpp} width={70}></img><span>C++</span></li>
          <li className="flex flex-col items-center space-y-3"><img src={py} width={70}></img><span>Python</span></li>
          <li className="flex flex-col items-center space-y-3"><img src={mysql} width={70}></img><span>MySQL</span></li>
          <li className="flex flex-col items-center space-y-3"><img src={mongodb} width={70}></img><span>MongoDB</span></li>
          <li className="flex flex-col items-center space-y-3"><img src={supabase} width={70}></img><span>SupaBase</span></li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Skills