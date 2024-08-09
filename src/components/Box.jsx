import React, { useEffect, useRef, useState } from 'react'
import Pagination from './Pagination'
import SearchBox from './SearchBox'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const Box = ({ palette, pokedex, currentBox, setCurrentBox, cellPerBox, handleMouseClick, openBoxes }) => {

  const lastCellIndex = currentBox * cellPerBox
  const firstCellIndex = lastCellIndex - cellPerBox
  const currentCells = pokedex.slice(firstCellIndex, lastCellIndex)

  const { palettes, isDark } = palette
  const [ color1, color2, color3 ] = palettes || []

  const previousPage = () => {
    if (currentBox !== 1) {
      setCurrentBox(currentBox - 1)
    }
  }

  const nextPage = () => {
    if (currentBox !== Math.ceil(pokedex.length / cellPerBox)) {
      setCurrentBox(currentBox + 1)
    }
  }

  return (
    <div className='flex flex-col items-center bg-transparent justify-center w-full h-full lg:w-3/4 bg-slate-300'>
      <div className="flex flex-col px-4">
          <Pagination 
            className='h-1/6 mb-2'
            totalCells={pokedex.length} 
            cellPerBox={cellPerBox} 
            currentBox={currentBox} 
            previousPage={previousPage} 
            nextPage={nextPage} 
            openBoxes={openBoxes}
            colors={palettes} 
            isDark={isDark} />
        
        <div className='grid grid-cols-6 gap-0'>
          {currentCells.map((pokemon) => (
            <div 
              key={pokemon.id} 
              className='flex rounded items-center justify-center m-0.5 xl:m-2 lg:m-1 md:m-1 xl:w-36 xl:h-36 lg:w-28 lg:h-28 md:w-20 md:h-20 sm:w-16 sm:h-16 grow bg-slate-600' 
              onClick={() => handleMouseClick(pokemon.id, pokemon.name, pokemon.sprites.front_default, pokemon.sprites.other["official-artwork"].front_default, pokemon.types)}
              >
              <img
                className={`object-cover`}
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                loading='lazy' />
            </div> 
          ))}
        </div>

        <div className='flex items-center px-2 gap-2 h-1/6 pb-2'>
          <div className='flex items-center justify-center w-1/2 pt-2 cursor-pointer'>
            <span 
              onClick={() => console.log('All Gens')}
              className='flex items-center justify-center text-white border w-full h-10'
            >
              All Gens
            </span>
          </div>
          <div className='items-center justify-center w-1/2'>
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box