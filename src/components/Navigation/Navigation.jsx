import { useState } from "react";
import logo from '../../images/logo.svg';
import menuIcon from '../../images/icon-hamburger.svg';

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
        <div className='flex justify-between items-center h-32 max-w-full px-10 text-black'>
            {/* Logo */}
            <img src={logo} style={{ width: '170px' }} />

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={`
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
                            duration-300 
                            ${item.text === 'Contact' ? 'bg-yellow-400 text-black uppercase' : ''}
                        `}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                <img src={menuIcon} alt='Menu Icon' className='w-8 h-8' />
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'absolute top-20 right-10 w-[90%] md:w-auto bg-white text-black shadow-lg flex flex-col items-center py-4 mt-10 rounded-lg before:content-[""] before:absolute before:-top-2 before:right-6 before:border-8 before:border-transparent before:border-b-white'
                        : 'hidden'
                }
            >
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={`
                            p-4 
                            text-lg 
                            text-ss_dark-grayish-blue 
                            font-bold 
                            hover:bg-gray-200 
                            rounded-full 
                            duration-300 
                            cursor-pointer 
                            ${item.text === 'Contact' ? 'bg-yellow-400 text-black uppercase' : ''}
                        `}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;
