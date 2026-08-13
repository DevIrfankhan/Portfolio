// import React from 'react'
import heroImg from '../Img/hero.png'
const Hero = () => {
    let list = {
        info: "I', Am",
        name: "Irfan khan",
        sub: "Frontend Developer",
        discription: "I am a Frontend Developer passionate about creating modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy turning ideas into interactive websites and continuously improving my skills by building real-world projects."
    }
    return (
        <div className="w-full min-h-screen bg-[#010420] flex flex-col md:flex-row items-center justify-evenly p-4 md:p-20 gap-10 md:gap-20">

            <div className="info  flex items-start justify-center w-full h-[400px] md:w-1/2 flex-col gap-2 text-white ">
                <span className="text-3xl text-yellow-400 font-poppins"> {list.info} </span>
                <span className="text-6xl text-yellow-400 font-poppins "> {list.name} </span>
                <span className="text-6xl text-yellow-400 font-poppins "> {list.sub} </span>
                <p className='font-poppins' > {list.discription} </p>
                <div className="btn flex gap-4 ">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download</span>
                    </button>

                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Resume</span>
                    </button>
                </div>

            </div>
            <div className="img flex items-center justify-center w-full h-screen md:w-1/2 md:h-1/2 ">
                <img src={heroImg} alt=""  />


            </div>
        </div>
    )
}

export default Hero
