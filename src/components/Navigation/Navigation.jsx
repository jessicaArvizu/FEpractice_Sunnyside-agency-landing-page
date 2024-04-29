import { useState } from "react";
import logo from '../../images/logo.svg'

function Navigation() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'About' },
        { id: 2, text: 'Services' },
        { id: 3, text: 'Projects' },
        { id: 4, text: 'Contact' }
    ];

    return (
        <div className='flex justify-between items-center h-32 max-w-full px-10 text-white'>
            {/* Logo */}
            <img src={logo} style={{width:'170px'}}/>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='
                        p-4
                        px-10 
                        m-2 
                        my-4 
                        active:bg-ss_white 
                        active:text-ss_v-dark-des-blue
                        hover:bg-ss_white/20 
                        hover:text-ss_white 
                        rounded-full 
                        cursor-pointer 
                        duration-300'>
                        {item.text}
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div> */}

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;