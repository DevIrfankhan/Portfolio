
import { useState } from "react";
import { Menu, X } from "lucide-react";


const NewNav = () => {
    const [thirdbtn, setThirdbtn] = useState(false);
    const [open, setOpen] = useState(false);
    return (
        <>

            <nav className="bg-gray-500 text-white h-16 flex items-center justify-between px-6">
                <h1>IRFAN KHAN</h1>
                {/* desktop menu */}
                <ul className="hidden md:flex gap-9" >
                    <li className=" cursor-pointer hover:text-amber-400" >Home</li>
                    <li className=" cursor-pointer hover:text-amber-400" >Project</li>
                    <li className=" cursor-pointer hover:text-amber-400" >Contact</li>
                </ul>
                {/* Mobile Button */}
                <button className="md:hidden" onClick={() => setOpen(!open)} >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

            </nav>
            <div className={`fixed top-0 right-0 h-screen w-64 bg-amber-500 text-amber-50 "transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} `}>
                <div className="flex justify-end p-5">
                    < X
                        size={28}
                        className="cursor-pointer"
                        onClick={() => setOpen(false)}
                    />
                </div>
                <ul>
                    <li className=" hover:bg-yellow-500" >HOme</li>
                    <li className=" hover:bg-yellow-500" >Project</li>
                    <li className=" hover:bg-yellow-500" >Contsct</li>
                </ul>
            </div>


            <newnav className="flex items-center justify-between bg-amber-300 h-16 w-full px-6" >
                <h1 className="font-bold ">IRFAN KHAN</h1>
                <div className="hidden md:flex  justify-center items-center h-full">
                    <ul className="flex items-center justify-center  h-full border-2  cursor-pointer"  >
                        <li className=" flex items-center justify-center hover:text-blue-700 w-40 hover:bg-amber-700 transition-all duration-300 h-full " >Home</li>
                        <li className=" flex items-center justify-center hover:text-blue-700 w-40 hover:bg-amber-700 transition-all duration-300 h-full " >About</li>
                        <li className=" flex items-center justify-center hover:text-blue-700 w-40 hover:bg-amber-700 transition-all duration-300 h-full " >Contact</li>
                        <li className=" flex items-center justify-center hover:text-blue-700 w-40 hover:bg-amber-700 transition-all duration-300 h-full " >Project</li>

                    </ul>
                </div>
                    <button className="md:hidden" onClick={() => setThirdbtn(!thirdbtn) }>
                        {thirdbtn ? <X size={28}/> : <Menu size={28}/>}
                    </button>

                {/* didebar */}

            </newnav>
            <div className={` fixed  top-0 right-0 h-full w-64 bg-amber-200 transition-transform duration-300 ${thirdbtn ? "translate-x-0" : "translate-x-full"} `}> 
                <div className="flex justify-end p-5">
                    <X size={28} className="cursor-pointer" onClick={()=> setThirdbtn(false)}/>
                </div>
                    <ul className=" "  >
                        <li className=" flex items-center justify-center hover:text-blue-700  transition-all duration-300  " >Home</li>
                        <li className=" flex items-center justify-center hover:text-blue-700  transition-all duration-300  " >About</li>
                        <li className=" flex items-center justify-center hover:text-blue-700  transition-all duration-300  " >Contact</li>
                        <li className=" flex items-center justify-center hover:text-blue-700  transition-all duration-300  " >Project</li>
                    </ul>
         </div>
        </>
    )
}

export default NewNav
