import React from 'react';
import { IoMenuSharp, IoClose, IoBook, IoKey, IoLayers } from "react-icons/io5";
import { MdTheaters } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { MdEventNote } from "react-icons/md";
import { GiStairsCake } from "react-icons/gi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import { PiShirtFoldedFill } from "react-icons/pi";
import { FaLaughWink } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";

const Categories = () => {
  return (
    <div className='container px-4 mx-auto pt-8 md:pt-10 text-center'>
      {/* Browse Categories */}

      <div className='w-full flex items-start lg:justify-center gap-8 overflow-x-scroll pb-4'
        style={{
          paddingInline: "10px",
        }}>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <MdTheaters className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Cinema </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <GiPartyPopper className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Parties </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
        <MdEventNote className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Seminars </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <GiStairsCake className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Weddings </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <BiSolidMoviePlay className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Movies </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <MdLibraryMusic className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Music </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <PiShirtFoldedFill className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Fashion </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <FaLaughWink className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Comedy </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <PiUsersFourFill className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Conference </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <FaUsers className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Convention </p>
        </span>
        <span className='flex flex-col gap-2 items-center cursor-pointer'>
          <HiMiniClipboardDocumentList className='text-3xl text-primary w-12 h-12 p-2 rounded-full bg-primary/10' />
          <p className='text-gray-500 text-xs'> Others </p>
        </span>


      </div>
    </div>
  )
}

export default Categories;