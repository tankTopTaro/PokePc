import React, { useEffect, useState } from 'react'
import Container from './Container'
import Pagination from './Pagination'
import SearchBox from './SearchBox'

const Box = ({ palette, pokedex, cells, handleMouseEnter, handleMouseLeave }) => {
  const [currentBox, setCurrentBox] = useState(1)
  const [cellPerBox, setCellPerBox] = useState(30)

  const lastCellIndex = currentBox * cellPerBox
  const firstCellIndex = lastCellIndex - cellPerBox
  const currentCells = pokedex.slice(firstCellIndex, lastCellIndex)

  const { palettes, isLight, isDark } = palette
  const [ color1, color2, color3, color4, color5 ] = palettes || []

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
    <Container className='flex-col items-center justify-center w-3/4 h-screen bg-slate-300' style={{backgroundColor: 'white', transition: 'background-color 0.3s ease'}}>
      <div className="flex flex-col w-full bg-slate-100 px-6 mx-8" style={{ backgroundColor: color2, transition: 'background-color 0.3s ease' }}>
        <SearchBox className='mt-6' />
        <Pagination totalCells={pokedex.length} cellPerBox={cellPerBox} currentBox={currentBox} previousPage={previousPage} nextPage={nextPage} colors={palettes} isDark={isDark} />
      </div>
      <div className='flex flex-col gap-2 w-full bg-slate-400 py-4' style={{ backgroundColor: color3, transition: 'background-color 0.3s ease'}}>
        <div className="grid grid-cols-6 gap-4 mx-4">
          {currentCells.map((pokemon, index) => (
            <div key={pokemon.name} className='flex grow xl:w-32 xl:h-32 lg:w-28 lg:h-28 md:w-20 md:h-20 sm:w-14 sm:h-14 items-center justify-center' onMouseEnter={() => handleMouseEnter(pokemon.id, pokemon.name, pokemon.sprites.front_default, pokemon.sprites.other["official-artwork"].front_default, pokemon.types)}>
              <img src={pokemon.sprites.front_default} alt="" />
            </div> 
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Box