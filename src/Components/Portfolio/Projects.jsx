import deccls from "../../assets/decentraclasses.png";
import supa from "../../assets/supa.png";
import wigo from "../../assets/wigo.png";
import tribecrafts from "../../assets/tribecrafts.png";
import humantales from "../../assets/humantales.png";
import ifp from "../../assets/ifp.png";
import spherespin from "../../assets/spherespin.png";
import leanprep from "../../assets/leanprep.png";
import traverse from "../../assets/traverse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import link from "../../assets/arrow.svg";
const Projects = () => {
  return (
    <div id="projects" className="pl-5 mb-10 overflow-x-hidden">
      <h1 className="text-white text-5xl font-bold mb-10 flex justify-center">
        Projects Showcase
      </h1>
      {/* Row 1  */}
      <div className="md:flex justify-evenly mb-20">
        <div className="w-[90%] mb-5 md:w-[30%] bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5">
          <img
            src={deccls}
            alt="decentraclasses"
            width={500}
            className="border-4 border-slate-500 mb-5"
          />
          <h1 className="text-2xl font-semibold mb-5">Decentraclasses</h1>
          <p className="mb-5">
            A Decentralised Ed-Tech Platform with Learn to Earn policy.
          </p>
          <div className="flex space-x-10">
            <a
              href="https://www.decentraclasses.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
                <span>Visit Site</span>
                <span className="mt-1">
                  <img src={link} alt="" width={15} />
                </span>
              </button>
            </a>
            <a
              href="https://github.com/DecentraSchool/decentraclasses"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-3x hover:text-white"
              />
            </a>
          </div>
        </div>
        <div className="w-[90%] mb-5 md:w-[30%] p-5 bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)]">
          <img
            src={supa}
            alt="supasmoothies"
            width={500}
            className="border-4 border-slate-500 mb-5"
          />
          <h1 className="text-2xl font-semibold mb-5">Supa Smoothies</h1>
          <p className="mb-5">
            A Dynamic Smoothie menu made using React and Supabase.
          </p>
          <div className="flex space-x-10">
            <a
              href="https://supaa-smoothies.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
                <span>Visit Site</span>
                <span className="mt-1">
                  <img src={link} alt="" width={15} />
                </span>
              </button>
            </a>
            <a
              href="https://github.com/Srikarmk/Supa-Smoothies"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-3x hover:text-white"
              />
            </a>
          </div>
        </div>
        <div className="w-[90%] mb-5 md:w-[30%] bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5">
          <img
            src={tribecrafts}
            alt="tribecrafts"
            width={500}
            className="border-4 border-slate-500 mb-5"
          />
          <h1 className="text-2xl font-semibold mb-5">TribeCrafts</h1>
          <p className="mb-5">
            A Full Stack MERN ECommerce Application based on Tribal Products.
          </p>
          <div className="flex space-x-10">
            <a
              href="https://tribecrafts.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
                <span>Visit Site</span>
                <span className="mt-1">
                  <img src={link} alt="" width={15} />
                </span>
              </button>
            </a>
            <a
              href="https://github.com/Srikarmk/tribecrafts"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-3x hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="md:flex justify-evenly mb-20">
        <div className="w-[90%] mb-5 md:w-[30%] bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5">
          <img
            src={humantales}
            alt="tribecrafts"
            width={500}
            className="border-4 border-slate-500 mb-5"
          />
          <h1 className="text-2xl font-semibold mb-5">Human Tales</h1>
          <p className="mb-5">
            A BootStrap based website for an author's books.
          </p>
          <div className="flex space-x-10">
            <a
              href="https://humantales.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
                <span>Visit Site</span>
                <span className="mt-1">
                  <img src={link} alt="" width={15} />
                </span>
              </button>
            </a>
            <a
              href="https://github.com/Srikarmk/human-tales-website"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-3x hover:text-white"
              />
            </a>
          </div>
        </div>
        <div className="w-[90%] mb-5 md:w-[30%] bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5">
          <img
            src={spherespin}
            alt="spherespin"
            width={500}
            className="border-4 border-slate-500 mb-5"
          />
          <h1 className="text-2xl font-semibold mb-5">Sphere Spin</h1>
          <p className="mb-5">
            A Simple Three Js Orbital Sphere with color magic.
          </p>
          <div className="flex space-x-10">
            <a
              href="https://sphere-spin.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
                <span>Visit Site</span>
                <span className="mt-1">
                  <img src={link} alt="" width={15} />
                </span>
              </button>
            </a>
            <a
              href="https://github.com/Srikarmk/SphereSpin"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-3x hover:text-white"
              />
            </a>
          </div>
        </div>
        <div className="w-[90%] mb-5 md:w-[30%] bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5">
          <img
            src={traverse}
            alt="traverse"
            width={500}
            className="border-4 border-slate-500 mb-5"
          />
          <h1 className="text-2xl font-semibold mb-5">Traverse</h1>
          <p className="mb-5">
            A Parallax landing page built using HTML and Tailwind via Net Ninja.
          </p>
          <div className="flex space-x-10">
            <a
              href="https://traverse-pllx.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
                <span>Visit Site</span>
                <span className="mt-1">
                  <img src={link} alt="" width={15} />
                </span>
              </button>
            </a>
            <a
              href="https://github.com/Srikarmk/Traverse"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-3x hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
