import { useState } from "react";
import { FaAlignJustify} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [icon, setIcon] = useState(false);

    const OpenMenu = () =>{
        setIcon(!icon)
    }


    return (
        <div className="">
          <div className="flex justify-around items-center bg-cyan-100 py-2 bg-transparent">
            <div className="block relative md:hidden">
                <span onClick={OpenMenu} className="text-2xl">
                {icon ? <><GrClose /></> : <><FaAlignJustify /></>}
                </span>
                <div className={`transition-transform duration-700 ${
              icon ? "transform translate-x-0" : "transform -translate-x-96"
            } top-10 left-80`}>
                <div className="list-none font-semibold absolute top-3 bg-base-100 shadow-md text-slate-700 py-4 flex flex-col space-y-2 w-32 px-2">
                <NavLink to="/" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400": isPending? "pending": ""}><li>Home</li>
                </NavLink>
                <NavLink to="/service" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400": isPending? "pending": ""}><li>Service</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400": isPending? "pending": ""}><li>About</li>
                </NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400": isPending? "pending": ""}><li>Contact Us</li>
                </NavLink>

                 </div>
                </div>
            </div>
            <div>SRS Ltd.Co</div>
            <div className="hidden md:flex justify-center list-none gap-5">
               
                <NavLink to="/" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400 border-b-2": isPending? "pending": ""}><li>Home</li>
                </NavLink>
                <NavLink to="/service" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400 border-b-2": isPending? "pending": ""}><li>Service</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400 border-b-2": isPending? "pending": ""}><li>About</li>
                </NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                      isActive? "active text-red-500 border-red-400 border-b-2": isPending? "pending": ""}><li>Contact Us</li>
                </NavLink>
                
            </div>
            <div className="btn btn-sm btn-outline border-b-2 border-0 hover:bg-blue-600 hover:text-black text-black"><button>Hire Us</button></div>
          </div>
        </div>
    );
};

export default Navbar;