import { NavLink } from "react-router";
import { FaLaptop, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const base = "trasition hover:text-blue-400"
    const active = "text-blue-400 font-semibold"
    return ( 
        <nav className="bg-gray border-b border-gray-700
        shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4
                flex justify-between items-center">
                <NavLink to='/' className='flex items-center gap-2
                text-lg font-bold text-blue-300'>
                    <FaLaptop className="text-blue-400 text-xl" />
                    <span>The project developer</span>
                </NavLink>

                {/* desktop nav */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="space-x-4 text-sm text-gray-300">
                        <NavLink to='/' className={({isActive}) => isActive ? active : base}>Home</NavLink>
                        <NavLink to='/projects' className={({isActive}) => isActive ? active : base}>Projects</NavLink>
                        <NavLink to='/blog' className={({isActive}) => isActive ? active : base}>Blog</NavLink>
                        <NavLink to='/about' className={({isActive}) => isActive ? active : base}>About</NavLink>
                        <NavLink to='/contact' className={({isActive}) => isActive ? active : base}>Contact</NavLink>

                    </div>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-400 text-xl cursor-pointer">
                        {menuOpen ? <FaTimes />: <FaBars />}
                    </button>
                </div>

                {
                    menuOpen &&
                    (
                            <div className='md:hidden bg-gray-800 border-t border-gray-700 px-6
                                py-4 space-y-2 space-x-4 text-center'>
                            <NavLink to='/'
                                className={({ isActive }) => isActive ? active : base}
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink to='/projects'
                                className={({ isActive }) => isActive ? active : base}
                                onClick={() => setMenuOpen(false)}
                            >
                                Projects
                            </NavLink>
                            <NavLink to='/blog' 
                                className={({isActive}) => isActive ? active : base}
                                onClick={() => setMenuOpen(false)}
                            >
                                Blog
                            </NavLink>
                            <NavLink to='/about' 
                                className={({isActive}) => isActive ? active : base}
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </NavLink>
                            <NavLink to='/contact' 
                                className={({isActive}) => isActive ? active : base}
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </nav>
     );
}
 
export default NavBar;