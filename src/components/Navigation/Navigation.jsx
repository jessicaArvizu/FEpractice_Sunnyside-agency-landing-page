import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

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
        <div className='relative'>
            <div className='flex justify-between items-center h-32 max-w-full px-10 text-white'>
                {/* Logo */}
                <img src="../images/logo.svg" style={{ width: '170px' }} />

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className={`
                                py-4
                                px-[35px]
                                active:bg-ss_white 
                                active:text-ss_v-dark-des-blue
                                ${item.text === 'Contact' ? 'bg-ss_white text-black' : 'hover:bg-ss_white/20 hover:text-ss_white'} 
                                ${item.text === 'Contact' ? 'uppercase' : 'normal-case'}
                                rounded-full 
                                cursor-pointer 
                                duration-300`
                            }
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>


                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <MenuIcon size={20} /> : <MenuIcon size={20} />}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'absolute m-4 items-center w-full bg-ss_white ease-in-out duration-500'
                        : 'hidden'
                }
                style={{ top: 'calc(100% - 32px)' }}
            >
                {/* Mobile Logo */}
                <img src="../images/logo.svg" style={{ width: '170px' }} />

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={`
                            p-4 
                            w-fit
                            ${item.text === 'Contact' ? 'bg-ss_yellow text-ss_v-dark-grayish-blue' : 'hover:bg-ss_white/20 hover:text-ss_white'} 
                            ${item.text === 'Contact' ? 'uppercase' : 'normal-case'}
                            duration-300 
                            border-gray-600 
                            cursor-pointer
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
