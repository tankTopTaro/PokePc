import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const Pagination = ({ totalCells, cellPerBox, currentBox, previousPage, nextPage, colors, isDark }) => {
    let pages =  []
    const [ color1, color2, color3, color4, color5 ] = colors || []
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
        <div className="inline-flex w-full items-center h-28 justify-center my-4 rounded">
            <div className="flex justify-center items-center w-full">
            <button 
                className='rounded-s-lg hover:bg-slate-700 hover:text-white bg-transparent font-semibold px-4 border-y-2 border-l-2 h-28 w-40 py-4 flex text-center items-center justify-between' 
                style={{
                    color: isDark && 'white',  
                    backgroundColor: hoverPrev ? color2 : color4, 
                    borderTop: `solid 2px ${color5}`, 
                    borderBottom: `solid 2px ${color5}`, 
                    borderLeft: `solid 2px ${color5}`  }} 
                onClick={previousPage}
                onMouseEnter={() => handleMouseEnterPrev()}
                onMouseLeave={() => handleMouseLeavePrev()}
            >
                <FaChevronLeft /> Prev
            </button>
            <div 
                className="text-xl text-center flex items-center justify-center w-full h-28 border-y-2" 
                style={{ 
                    backgroundColor: color5,
                    borderTop: `solid 2px ${color5}`, 
                    borderBottom: `solid 2px ${color5}`, 
                    color: isDark && 'white' 
                }} 
            >
                Box {currentBox} of {pages.length}
            </div>
            <button 
                className='rounded-e-lg hover:bg-slate-700 hover:text-white bg-transparent font-semibold px-4 border-y-2 border-r-2 h-28 w-40 py-4 flex text-center items-center justify-between' 
                style={{ 
                    color: isDark && 'white',  
                    backgroundColor: hoverNext ? color2 : color4, 
                    borderTop: `solid 2px ${color5}`, 
                    borderBottom: `solid 2px ${color5}`, 
                    borderRight: `solid 2px ${color5}` }} 
                onClick={nextPage}
                onMouseEnter={() => handleMouseEnterNext()}
                onMouseLeave={() => handleMouseLeaveNext()}
            >
                Next <FaChevronRight /> 
            </button>
            </div>
        </div>
    )
}

export default Pagination