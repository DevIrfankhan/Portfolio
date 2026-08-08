// import React from 'react'
import heroImg from '../Img/hero.png'
const Hero = () => {
    let list = {
        name: "Irfan khan",
        sub: "Frontend Developer",
        discription:"I am a Frontend Developer passionate about creating modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy turning ideas into interactive websites and continuously improving my skills by building real-world projects."
    }
  return (
      <div className="w-full min-h-screen bg-blue-950 flex flex-col md:flex-row items-center justify-around p-8 md:p-20 gap-10 md:gap-20">
        
          <div className="info  flex items-start justify-center w-[800px] h-[400px] flex-col gap-2 text-white border-2">
              <h1 className="text-4xl text-yellow-400"> {list.name} </h1>
              <h3> {list.sub} </h3>
              <p> {list.discription} </p>
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
          <div className="img flex items-center justify-center w-[500px] h-[60vh] ">
              <img src={heroImg} alt="" />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatibus placeat, corrupti eius nisi eligendi aliquid, vitae perferendis vel ipsam, ratione error blanditiis assumenda quaerat aspernatur? Veniam perspiciatis blanditiis aperiam?

          </div>
    </div>
  )
}

export default Hero
