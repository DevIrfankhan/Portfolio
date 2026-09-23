// import React from 'react'
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
    ArrowUp 

} from "lucide-react";
const Contact = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="w-full h-50  bg-gray-100">

      <div className="flex flex-col md:flex-row items-center gap-10 justify-around h-full">

        {/* box1 */}
        <div className="flex flex-col gap-2 items-start justify-center  h-full">

          <span  className="  flex gap-2 font-poppins"> < Phone size={28}  className=" text-black-700"/> 9696255752</span>
          <span  className="  flex gap-2 font-poppins" >< Mail size={28} className="text-black-300" /> irfankhanofficial140@gmail.com</span>
          <span  className="  flex gap-2 font-poppins"> <MessageCircle size={28} className="text-black-700" />Whatsapp</span>
          <span  className="  flex gap-2 font-poppins" > <MapPin size={28}  className="text-black-700"/>New Hider Ganj Lucknow Utter Pradesh</span>
        </div>
       
        {/* box2 */}
        <div className="flex flex-col gap-2 items-start justify-center  h-full">
          
        <div  className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >
          <i className="fa-brands fa-github text-3xl"></i>
          <a href="https://github.com/DevIrfankhan">gitHub</a>
        </div>
        <div  className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >
            <i className="fa-brands fa-square-linkedin text-3xl"></i>
          <a href="https://github.com/DevIrfankhan">Linkedin</a>
        </div>
        <div  className="flex items-center justify-center gap-3.5 text-xl text-gray-400 " >
            <i class="fa-brands fa-instagram text-3xl"></i>
          <a href="https://github.com/DevIrfankhan">Instagram</a>
        </div>
</div>
        {/* box3 */}
        <div>
          <button onClick={scrollTop} className="outline-0 border-0 cursor-pointer"> < ArrowUp size={28}/>top</button>


        </div>
      </div>
    </div>
  )
}

export default Contact
