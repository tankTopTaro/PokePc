import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Container from './components/Container'
import Box from './components/Box'
import Entries from './components/Entries'
import PokeAPI from './services/PokeAPI'

const App = () => {
  const [Id, setId] = useState(null)
  const [name, setName] = useState(null)
  const [spriteColor, setSpriteColor] = useState(null)
  const [sprite, setSprite] = useState(null)
  const [types, setTypes] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [palette, setPalette] = useState({
    color: [],
    isLight: true,
    isDark: false
  })

  const limit = 151
  const offset = 905

  const handleMouseEnter = (pokemon_id, pokemon_name, sprite_color, pokemon_sprite, pokemon_types) => {
    setId(pokemon_id)
    setName(pokemon_name)
    setSprite(pokemon_sprite)
    setSpriteColor(sprite_color)
    setTypes(pokemon_types)
  }

  const handlePalette = (palettes, isLight, isDark) => {
    setPalette({ 
      palettes, 
      isLight, 
      isDark 
    })
  }

  const handleMouseLeave = () => {
    setId(null)
  }

  const loadPokedex = async () => {
    try {
      // Get Initial List
      const response = await PokeAPI.getPokedexList(limit, offset)
      const names = response.data.results.map((pokemon) => pokemon.name)
      
      // Get Details
      const res = names.map((pokemon) => PokeAPI.getPokemonByName(pokemon))
      
      const detailedResponse = await Promise.all(res)
      const dataArray = detailedResponse.map((res) => res.data)
      setPokedex(dataArray)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    loadPokedex()
  }, [])

  return (
    <Container>
      <Sidebar />
      <Box palette={palette} pokedex={pokedex} cells={limit} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
      <Entries Id={Id} name={name} sprite_color={spriteColor} sprite={sprite} types={types} handlePalette={handlePalette}/>
    </Container>
  )
}

export default App