// import React from 'react'
import FoodImg from "../Img/fr.png"
const Project = () => {
  return (
    <div className="w-full min-h-screen  bg-white-800" >
      <div>

        <h1>Projecs</h1>
      </div>
      <div className=" flex w-full border-2 items-center justify-around min-h-screen ">

        <div className=" flex border-2 justify-center  flex-col     px-10 " >
          
          <div className="border-2 flex items-center justify-center flex-col">

          <img className="h-60 w-60" src={FoodImg} alt="" />
          <h1>Food Recipe</h1>
          </div>
          <div className=" flex items-center justify-center border-2 gap-5 ">

          <span className="bg-blue-700">
            HTML
          </span>
          <span>
            JavaScript
          </span>
          <span>
            Taiwind.css
          </span>
          <span>
            React.js
          </span>
          </div>
        
        </div>
        <div className=" border-2   max-w-[700px] h-[5/12] " >Project-2</div>
      </div>
    </div>
  )
}

export default Project
