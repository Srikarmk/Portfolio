import profpic from "../../assets/profpic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter , faTelegram,faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div id="home" className='px-10 md:px-0 md:flex justify-center md:justify-between py-10 items-center text-white h-[90vh] overflow-x-hidden space-y-5'>
        {/* Image */}
        <div className='w-[40%] md:w-[40%] flex justify-center mx-auto'>
            <img src={profpic} alt="" width={300} />
        </div>
        {/* Landing Info */}
        <div className='md:w-[60%] md:space-y-10 space-y-5'>
          <div className="flex flex-col items-center space-y-5 md:space-y-10 md:block">
            <h1 className="text-2xl md:text-5xl font-bold md:font-extrabold ">Hi , I am M.K.Sai Srikar</h1>
            <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  text-2xl md:text-3xl text-white font-bold w-[100%] md:w-[40%]">Full Stack Developer</p>

            <a href="https://drive.google.com/file/d/1g8KzGR4-ffNqdzaQpR1gSS8JBeKWbZoi/view?usp=drive_link" target="_blank" rel="noreferrer"><button className="bg-white text-black w-[100px] h-10 resume">Resume</button></a>
            </div>
            <div className="flex justify-around md:flex md:justify-between md:w-[50%] pt-10">
              <a href="https://github.com/Srikarmk" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-3x hover:text-[#3a86ff]" /></a>

              <a href="https://www.linkedin.com/in/srikarmk/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-3x hover:text-[#3a86ff]" /></a>

              <a href="https://t.me/Srikarmk" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram} className="fa-3x hover:text-[#3a86ff]" /></a>
              <a href="https://twitter.com/Srikarismad" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} className="fa-3x hover:text-[#3a86ff]"/></a>
            </div>
        </div>
        
    </div>
  )
}

export default Home