import React from 'react'
import Box from './components/Box'
import Entries from './components/Entries'
import Container from './components/Container'

const Poke = ({palette, pokedex, species, currentBox, cellPerBox, setCurrentBox, Id, name, sprite, types, handleMouseClick, openBoxes}) => {
  return (
      <>
      <Box 
          palette={palette} 
          pokedex={pokedex} 
          currentBox={currentBox} 
          setCurrentBox={setCurrentBox} 
          cellPerBox={cellPerBox} 
          handleMouseClick={handleMouseClick} 
          openBoxes={openBoxes}/>
        
      <Entries 
        palette={palette} 
        species={species}
        Id={Id} 
        name={name} 
        sprite={sprite} 
        types={types} />
      </>
  )
}

export default Poke