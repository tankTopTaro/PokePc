import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBox = ({ className }) => {
  return (
    <div className={`${className} pt-2 w-full relative mx-auto text-gray-600`}>
        <input className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <BiSearch size={28} className='text-gray-600 h-4 w-4 fill-current' />
        </button>
    </div>
  )
}

export default SearchBox