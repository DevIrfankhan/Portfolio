
import { useState } from "react";
import { Menu, X } from "lucide-react";


const NewNav = () => {
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
            <div className={`fixed top-0 right-0 h-screen w-64 bg-amber-500 text-amber-50"transform transition-transform duration-300 ${open? "translate-x-0":"translate-x-full"} `}>
                <div className="flex justify-end p-5">
                    < X
                        size={28}
                        className="cursor-pointer"
                        onClick={() => setOpen(false)}
                    />
                </div>
                <ul>
                    <li>HOme</li>
                    <li>Project</li>
                    <li>Contsct</li>
                </ul>
            </div>
        </>
    )
}

export default NewNav
