// import React from 'react'
import FoodImg from "../Img/fr.png"
// import { Github } from "lucide-react"
const Project = () => {
  return (
    <div className="w-full min-h-screen   bg-white" >
      <div className=" flex items-center justify-center p-5">

        <h1 className="text-5xl font-poppins" >Project's</h1>
      </div>
      <div className=" flex flex-col md:flex-row w-full gap-10 p-2  items-center justify-evenly min-h-screen ">

        <div className=" flex  max-w-sm  justify-center   flex-col overflow-hidden rounded-2xl  bg-white  shadow-lg  p-5 " >

          <div className=" w-full flex items-center mb-5 justify-center flex-col">

            <img className="h-60 w-full rounded-2xl" src={FoodImg} alt="" />
          </div>
          <div className="flex items-center justify-center flex-col gap-5 ">

            <h1 className="flex items-start justify-start  w-full text-2xl font-bold font-poppins" >Food Recipe</h1>
            <div>
              <p className="font-poppins">A responsive food recipe application where users can explore different recipes and view detailed information about their favorite meals.</p>
            </div>
            <div className=" flex items-center justify-center flex-wrap  gap-5 ">

              <span className="px-3 py-1 text-sm border-2  text-orange-700 bg-orange-100 rounded-2xl">HTML</span>
              <span className="px-3 py-1 text-sm  border-2 text-yellow-700 bg-yellow-100 rounded-full" >JavaScript</span>
              <span className="px-3 py-1 text-sm  border-2 text-blue-700 bg-blue-100 rounded-full" >Taiwind.css</span>
              <span className="px-3 py-1 text-sm  border-2 text-cyan-700 bg-cyan-100 rounded-full" >React.js</span>
            </div>
            <div className="flex items-center justify-around w-full p-2 border-amber-500">
              <a href="https://github.com/DevIrfankhan/FoodsRecipe" className=" cursor-pointer bg-black p-2.5 text-white rounded-lg flex items-center justify-center gap-1.5 ">  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg> GitHub</a>
              {/* Live demo */}
              <a href="http://localhost:5173/#" className=" cursor-pointer  p-2.5 text-blue-700 border-2 rounded-lg flex items-center justify-center gap-1.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
                Live Demo</a>

            </div>
          </div>

        </div>
        {/* Second Box */}
        <div className=" flex  max-w-sm  justify-center   flex-col overflow-hidden rounded-2xl  bg-white  shadow-lg  p-5 " >

          <div className=" w-full flex items-center mb-5 justify-center flex-col">

            <img className="h-60 w-full rounded-2xl" src={FoodImg} alt="" />
          </div>
          <div className="flex items-center justify-center flex-col gap-5 ">

            <h1 className="flex items-start justify-start  w-full text-2xl font-bold font-poppins" >Food Recipe</h1>
            <div>
              <p className="font-poppins">A responsive food recipe application where users can explore different recipes and view detailed information about their favorite meals.</p>
            </div>
            <div className=" flex items-center justify-center flex-wrap  gap-5 ">

              <span className="px-3 py-1 text-sm border-2  text-orange-700 bg-orange-100 rounded-2xl">HTML</span>
              <span className="px-3 py-1 text-sm  border-2 text-yellow-700 bg-yellow-100 rounded-full" >JavaScript</span>
              <span className="px-3 py-1 text-sm  border-2 text-blue-700 bg-blue-100 rounded-full" >Taiwind.css</span>
              <span className="px-3 py-1 text-sm  border-2 text-cyan-700 bg-cyan-100 rounded-full" >React.js</span>
            </div>
            <div className="flex items-center justify-around w-full p-2 border-amber-500">
              <a href="http://localhost:5173/#" className=" cursor-pointer bg-black p-2.5 text-white rounded-lg flex items-center justify-center gap-1.5 ">  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg> GitHub</a>
              {/* Live demo */}
              <a href="http://localhost:5173/#" className=" cursor-pointer  p-2.5 text-blue-700 border-2 rounded-lg flex items-center justify-center gap-1.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
                Live Demo</a>

            </div>
          </div>

        </div>
        {/* Third Box */}
        <div className=" flex  max-w-sm  justify-center   flex-col overflow-hidden rounded-2xl  bg-white  shadow-lg  p-5 " >

          <div className=" w-full flex items-center mb-5 justify-center flex-col">

            <img className="h-60 w-full rounded-2xl" src={FoodImg} alt="" />
          </div>
          <div className="flex items-center justify-center flex-col gap-5 ">

            <h1 className="flex items-start justify-start  w-full text-2xl font-bold font-poppins" >Food Recipe</h1>
            <div>
              <p className="font-poppins">A responsive food recipe application where users can explore different recipes and view detailed information about their favorite meals.</p>
            </div>
            <div className=" flex items-center justify-center flex-wrap  gap-5 ">

              <span className="px-3 py-1 text-sm border-2  text-orange-700 bg-orange-100 rounded-2xl">HTML</span>
              <span className="px-3 py-1 text-sm  border-2 text-yellow-700 bg-yellow-100 rounded-full" >JavaScript</span>
              <span className="px-3 py-1 text-sm  border-2 text-blue-700 bg-blue-100 rounded-full" >Taiwind.css</span>
              <span className="px-3 py-1 text-sm  border-2 text-cyan-700 bg-cyan-100 rounded-full" >React.js</span>
            </div>
            <div className="flex items-center justify-around w-full p-2 border-amber-500">
              <a href="http://localhost:5173/#" className=" cursor-pointer bg-black p-2.5 text-white rounded-lg flex items-center justify-center gap-1.5 ">  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg> GitHub</a>
              {/* Live demo */}
              <a href="http://localhost:5173/#" className=" cursor-pointer  p-2.5 text-blue-700 border-2 rounded-lg flex items-center justify-center gap-1.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
                Live Demo</a>

            </div>
          </div>

        </div>
        {/* end */}
      </div>
    </div>
  )
}

export default Project
