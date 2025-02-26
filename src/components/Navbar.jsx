import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { IoClose, IoChevronDown } from "react-icons/io5";
import SearchInput from './SearchInput';
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);


  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
  
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <nav className="shadow-md fixed z-40 top-0 w-full pb-12 md:pb-0 bg-white md:bg-white/96">
      <div className="container w-full mx-auto px-4 md:px-0 py-4 flex justify-between items-center gap-0">
        {menuOpen ? (
          <IoClose onClick={handleToggleMenu} className="flex md:hidden text-2xl text-primary cursor-pointer z-40 bg-primary/10" aria-label="Close menu" />
        ) : (
          <div className="flex flex-col gap-y-1 cursor-pointer md:hidden z-4" onClick={handleToggleMenu} aria-label="Open menu">
            <span className="w-5 h-[2px] bg-primary flex rounded-full"></span>
            <span className="w-5 h-[2px] bg-primary flex rounded-full"></span>
            <span className="w-5 h-[2px] bg-primary flex rounded-full"></span>
          </div>
        )}

        <div className="w-full text-center md:text-start mx-auto absolute left-0 sm:relative z-0">
          <Link to="/" className="text-lg md:text-2xl font-bold text-primary cursor-pointer z-4">
            EasyTickets
          </Link>
        </div>

        <div className={`transition-all duration-600 ease-in-out ${menuOpen ? 'gap-0 pt-6 px-4 md:p-0 left-0' : ''} flex-col h-screen md:h-fit z-10 absolute bg-white md:bg-transparent -left-[110%] top-14 md:top-0 md:relative md:left-0 flex md:flex-row md:justify-center space-x-8 w-full`}>
          <Link to="/about" className="text-gray-800 hover:text-primary w-full md:w-fit border-b-1 border-primary/20 md:border-0 py-2 md:py-0" onClick={handleToggleMenu}>
            About
          </Link>
          <div className="relative w-full md:w-fit" ref={dropdownRef}>
            <div className="text-gray-800 hover:text-primary flex gap-0.5 items-end w-full md:w-fit border-b-1 border-primary/20 md:border-0 py-2 md:py-0 cursor-pointer"
              role="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={handleToggleDropdown}
            >
              Categories
              {/* ROTATE ICON WHEN DROPDOWN OPENS */}
              <IoChevronDown className={`text-xs mb-1.5 transition-all duration-300 ${dropdownOpen ? 'transform rotate-180' : ''}`} />
            </div>
            {dropdownOpen && (
              <ul className={`mt-0 md:mt-2 ${menuOpen ? 'relative' : 'absolute top-full left-0 bg-white shadow-md min-w-full'}`}>
                <li className="hover:bg-gray-100 py-2 px-4 border-b-1 border-primary/20 md:border-0" tabIndex={0}>
                  <Link to="/category1" onClick={handleToggleMenu} className='text-nowrap text-gray-600'> Bus Tickets </Link>
                </li>
                <li className="hover:bg-gray-100 py-2 px-4 border-b-1 border-primary/20 md:border-0" tabIndex={1}>
                  <Link to="/category2" onClick={handleToggleMenu} className='text-nowrap text-gray-600'> Party Tickets </Link>
                </li>
                <li className="hover:bg-gray-100 py-2 px-4 border-b-1 border-primary/20 md:border-0" tabIndex={2}>
                  <Link to="/category3" onClick={handleToggleMenu} className='text-nowrap text-gray-600'> Shows Tickets </Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/contact" className="text-gray-800 hover:text-primary w-full md:w-fit border-b-1 border-primary/20 md:border-0 py-2 md:py-0" onClick={handleToggleMenu}>
            Contact
          </Link>
          <Link to="/help" className="text-gray-800 hover:text-primary w-full md:w-fit border-b-1 border-primary/20 md:border-0 py-2 md:py-0" onClick={handleToggleMenu}>
            Help
          </Link>
        </div>
        
        
        <div className='flex items-center gap-2.5 md:w-full'>
          <SearchInput />
          
          <Link to="/login" className="flex items-center z-2 cursor-pointer bg-primary/10 p-2 rounded-md text-primary hover:text-primary" onClick={() => menuOpen && setMenuOpen(false)}>
            <BiUser />
          </Link>
          
          {/* TOGGLE DARK MODE */}
          {/* <button className="flex items-center gap-1 z-2 cursor-pointer bg-primary/10 p-2 rounded-md text-primary hover:text-primary" onClick={toggleDarkMode}>
            {darkMode ? <RiSunFill /> : <RiMoonClearFill />}
          </button> */}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;