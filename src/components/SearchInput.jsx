import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";

const SearchInput = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleFocus = () => {
    setSearchOpen(!searchOpen);
  };

  const handleBlur = () => {
    setSearchOpen(false);
  };

  return (
    <div className="px-4 md:px-0 w-fit md:w-full flex items-center justify-end gap-0">
      {/* DESKTOP */}
      <span className='cursor-pointer w-full md:w-fit hidden md:flex items-center gap-2 text-primary'>
        <BiSearchAlt onClick={handleFocus} className='bg-primary/10 text-2xl w-8 h-8 rounded-md p-2' />
        {searchOpen ? (
          <>
            <input type='search' placeholder='Search for events...' className='text-md w-full max-w-[1540px] mx-auto z-2 absolute !top-16 lg:top-0 left-1/2 -translate-x-1/2 !bg-white px-4 md:px-8 py-2.5 border-b-2 border-transparent focus:border-primary' />
            <div onClick={handleBlur} className='absolute w-full top-16 left-0 bg-black/60 h-screen z-0' 
            style={{
              // backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
            />
          </>
        ) : (
          ""
        )}
      </span>

      {/* MOBILE */}
      <div className=''>
        <span className='fixed z-4 top-16 left-0 w-full flex md:hidden items-center px-4'>
          <BiSearchAlt className='text-primary absolute ml-3 -mt-1' />
          <input type='search' placeholder='Search for events...' className='text-md -mt-1 left-0 w-full h-10 px-8 text-primary bg-primary/10 rounded-full' onFocus={handleFocus} onBlur={handleBlur} />
          {searchOpen && (
            <div onClick={handleBlur} className='absolute w-full top-12 left-0 bg-black/60 h-screen z-0 flex md:hidden' 
            style={{
              // backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default SearchInput;