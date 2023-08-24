import { Link} from "react-router-dom";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="sticky top-0">
        <div className='flex md:flex justify-between text-white p-5 mix-blend-screen bg-[#0e2a47]'>
            <h1 className='md:w-[40%] text-2xl font-bold'>SrikarMK</h1>
        <ul className='hidden md:flex md:justify-around md:w-[60%] md:text-xl md:font-semibold'>
            <li className="hover:text-[#3a86ff]"><a href="/#home"> Home </a></li>
            <li className="hover:text-[#3a86ff]"><a href="/#skills">Skills</a></li>
            <li className="hover:text-[#3a86ff]"><a href="/#projects">Projects</a></li>
            <li className="hover:text-[#3a86ff]"><a href="/#blogs">Blogs</a></li>
        </ul>
        <div className="lg:hidden flex items-center z-60">
              <button className="focus:outline-none" onClick={toggleNavbar}>
                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M3.293 6.293a1 1 0 0 1 1.414 0L10 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L11.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 12 3.293 6.707a1 1 0 0 1 0-1.414z"
                    ></path>
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 10a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 15a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
            
        </div>
        {isOpen && (
    <div className="mobile-nav z-20 relative md:hidden mt-2 py-2">
      <Link to="/" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
        Home
      </Link>
      <Link to="/courses" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
        Courses
      </Link>
      <Link to="/community" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
        Community
      </Link>
      <Link to="/mentor" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
        Mentorships
      </Link>
      <Link to="/careers" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
        Career
      </Link>
      <a href="#" className="flex justify-center px-4 py-2 hover:bg-blue-500 hover:text-white">
        About us
      </a>
    </div>
  )}
    </div>
  )
}

export default Nav