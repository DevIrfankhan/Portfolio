// import React from 'react'
import { Code2 } from "lucide-react";
import html from '../Img/html.png'
import css from '../Img/css.png'
import js from '../Img/js.png'
import tail from '../Img/tail.png'
import react from '../Img/react.png'
const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* skill div */}
      <div className="flex items-center justify-center p-5">
        <h1 className="flex items-center justify-center gap-1 text-3xl"> <  Code2 size={28} className="flex items-center justify-center" />Technicals Skills</h1>
      </div>
      {/* Skill list div */}
      <div className="flex flex-wrap items-center justify-evenly w-full mt-20  gap-20 p-10 ">
        {/* skill icon div */}
        <div className=" flex flex-col  md:flex-row   items-center justify-center gap-10  shadow-lg rounded-2xl w-120 ">
          <img src={html} alt="HTML" className="w-50" />
          <h1  className="text-2xl p-1.5 rounded-2xl font-poppins shadow-lg">HTML</h1>
        </div>
        <div className="  flex flex-col  md:flex-row  items-center justify-center w-120  shadow-lg rounded-2xl gap-20">
          <img src={css} alt="HTML" className="w-30" />
          <h1  className="text-2xl  p-1.5 rounded-2xlfont-poppins shadow-lg">CSS</h1>
        </div>
        <div className=" flex flex-col  md:flex-row  items-center justify-center w-120  shadow-lg rounded-2xl gap-20">
          <img src={js} alt="HTML" className="w-40 rounded-2xl" />
          <h1  className="text-2xl p-1.5 rounded-2xl font-poppins shadow-lg">JavaScript</h1>
        </div>
        <div className=" flex flex-col  md:flex-row   items-center justify-center w-120  shadow-lg rounded-2xl gap-20">
          <img src={tail} alt="HTML" className="w-50" />
          <h1  className="text-2xl p-1.5 rounded-2xl font-poppins shadow-lg">Tailwind</h1>
        </div>
        <div className=" flex flex-col  md:flex-row   items-center justify-center w-120  shadow-lg rounded-2xl gap-20">
          <img src={react} alt="HTML" className="w-50" />
          <h1  className="text-2xl p-1.5 rounded-2xl font-poppins shadow-lg">React.js</h1>
        </div>
      </div>
    </div>
  )
}

export default Skills
