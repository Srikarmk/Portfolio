import profpic from "../../assets/profpic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter , faTelegram,faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div id="home" className='flex justify-between py-10 items-center text-white h-[90vh]'>
        {/* Image */}
        <div className='w-[40%] flex justify-center'>
            <img src={profpic} alt="" width={300} />
        </div>
        {/* Landing Info */}
        <div className='w-[60%] space-y-10'>
            <h1 className="text-5xl font-extrabold ">Hi , I am M.K.Sai Srikar</h1>
            <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  text-3xl text-white font-bold w-[40%]">Full Stack Developer</p>

            <button className="bg-white text-black w-[100px] h-10 resume"><a href="https://drive.google.com/file/d/19AcKFfZKZnnfzPCcL97ftBPLipdUbh8q/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></button>

            <div className="flex justify-between w-[50%] pt-10">
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