import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { BsBox } from "react-icons/bs";

const Pagination = ({ className, totalCells, cellPerBox, currentBox, previousPage, nextPage, openBoxes, colors, isDark }) => {
    let pages =  []
    const [ color1, color2, color3 ] = colors || []
    const [hoverPrev, setHoverPrev] = useState(false)
    const [hoverNext, setHoverNext] = useState(false)

    for(let i = 1; i <= Math.ceil(totalCells/cellPerBox); i++){
        pages.push(i)
    }

    const handleMouseEnterPrev = () => setHoverPrev(true)
    const handleMouseLeavePrev = () => setHoverPrev(false)

    const handleMouseEnterNext = () => setHoverNext(true)
    const handleMouseLeaveNext = () => setHoverNext(false)

    return (
        <div className={`${className} inline-flex w-auto items-center justify-center`}>
            <div className="flex justify-center items-center w-full">
            <button 
                className='rounded-ss-lg hover:bg-slate-700 hover:text-white bg-transparent font-semibold px-2 border-2 border-slate-500 h-12 w-14 py-4 flex text-center items-center justify-between' 
                style={{
                    color: isDark && 'white',  
                    backgroundColor: hoverPrev ? color1 : color3, 
                    border: `solid 2px ${color2}`, 
                }} 
                onClick={previousPage}
                onMouseEnter={() => handleMouseEnterPrev()}
                onMouseLeave={() => handleMouseLeavePrev()}
            >
                <span><FaChevronLeft /></span> <span className='ml-2'>L</span>
            </button>
            <div 
                className="rounded text-xl text-center cursor-pointer border-2 border-slate-500 flex items-center justify-center w-full h-16 mx-4 border-2" 
                style={{ 
                    backgroundColor: color3,
                    border: `solid 2px ${color3}`,
                    color: isDark && 'white' 
                }} 
                onClick={() => openBoxes(pages.length)}
            >
              <span 
                className='hidden md:flex md:items-center md:justify-center md:w-1/4 md:px-4 md:border-r md:border-solid md:h-5/6 md:border-slate-400'
                style={{
                    borderRight: `2px solid ${color1}`,
                }}
              >
                    <BsBox className='hidden md:block' size={28} style={{ color: color1 }} />
                </span>
              <span className='w-3/4 flex items-center justify-center' >{currentBox} - {pages.length}</span>
            </div>
            <button 
                className='rounded-tr-lg hover:bg-slate-700 hover:text-white bg-transparent font-semibold px-2 border-2 border-slate-500 h-12 w-14 py-4 flex text-center items-center justify-between' 
                style={{ 
                    color: isDark && 'white',  
                    backgroundColor: hoverNext ? color1 : color3, 
                    border: `solid 2px ${color2}`
                }} 
                onClick={nextPage}
                onMouseEnter={() => handleMouseEnterNext()}
                onMouseLeave={() => handleMouseLeaveNext()}
            >
                <span className='mr-2'>R</span> <span><FaChevronRight /></span> 
            </button>
            </div>
        </div>
    )
}

export default Pagination