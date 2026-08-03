import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Irfan</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    <li className="cursor-pointer hover:text-yellow-400">Home</li>
                    <li className="cursor-pointer hover:text-yellow-400">About</li>
                    <li className="cursor-pointer hover:text-yellow-400">Projects</li>
                    <li className="cursor-pointer hover:text-yellow-400">Contact</li>
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-amber-500 text-white transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-5">
                    <X
                        size={28}
                        className="cursor-pointer"
                        onClick={() => setOpen(false)}
                    />
                </div>

                <ul className="flex flex-col gap-6 text-xl px-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;