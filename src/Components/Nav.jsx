const Nav = () => {
  return (
    <div className="sticky top-0">
        <div className='flex justify-between text-white p-5 mix-blend-screen bg-[#0e2a47]'>
            <h1 className='w-[40%] text-2xl font-bold'>SrikarMK</h1>
        <ul className='flex justify-around w-[60%] text-xl font-semibold'>
            <li className="hover:text-[#3a86ff]"><a href="/#home"> Home </a></li>
            <li className="hover:text-[#3a86ff]"><a href="/#skills">Skills</a></li>
            <li className="hover:text-[#3a86ff]"><a href="/#projects">Projects</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Nav