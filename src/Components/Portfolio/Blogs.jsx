import link from "../../assets/arrow.svg";
import iotpaper from "../../assets/iotpaper.png";
import fuelpaper from "../../assets/fuelpaper.png";
const Blogs = () => {
  return (
    <div className="pl-5 overflow-x-hidden" id="blogs">
        <h1 className="text-white text-5xl font-bold mb-10 flex justify-center">Blogs and Papers</h1>
        <div className="md:flex justify-evenly">
        <div className="w-[90%] mb-5 md:w-[30%] bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5">
            <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1671473876012/_6ZoYLlEb.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="" className="mb-10" />
            <h1 className="text-3xl font-semibold mb-5">100 Days of Code : A Skill Up Journey !</h1>
            <a href="https://srikarmk.hashnode.dev/100-days-of-code-a-skill-up-journey" target="_blank" rel="noreferrer" ><button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] mb-5 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]"><span>Read</span><span className="mt-1"><img src={link} alt="" width={15} /></span></button></a>
            <div className="p-2 rounded-full w-[100px] flex justify-center bg-slate-700 text-white">Blog</div>
        </div>
        <div className="w-[90%] mb-5 md:w-[30%] bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5">
            <div className="flex justify-center"><img src={iotpaper} className="mb-10" width={350} /></div>
            <h1 className="text-3xl font-semibold mb-5">Smart Farming: A Machine Learning and IoT Approach</h1>
            <a href="https://www.irjet.net/archives/V10/i5/IRJET-V10I527.pdf" target="_blank" rel="noreferrer" ><button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] mb-5 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]"><span>Read</span><span className="mt-1"><img src={link} alt="" width={15} /></span></button></a>
            <div className="p-2 rounded-full w-[200px] flex justify-center bg-slate-700 text-white">Research Paper</div>
        </div>
        <div className="w-[90%] mb-5 md:w-[30%] bg-blue-300 shadow-[5px_5px_0px_0px_rgba(255,255,255)] p-5">
            <div className="flex justify-center"><img src={fuelpaper} className="mb-10" width={350} /></div>
            <h1 className="text-3xl font-semibold mb-5">Hydrogen Fuel Cell AutoMobile: A Comprehensive Overview</h1>
            <a href="https://www.irjet.net/archives/V10/i2/IRJET-V10I258.pdf" target="_blank" rel="noreferrer" ><button className="p-3 flex justify-between items-center space-x-2 border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] mb-5 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]"><span>Read</span><span className="mt-1"><img src={link} alt="" width={15} /></span></button></a>
            <div className="p-2 rounded-full w-[200px] flex justify-center bg-slate-700 text-white">Research Paper</div>
        </div>
        </div>
    </div>
  )
}

export default Blogs