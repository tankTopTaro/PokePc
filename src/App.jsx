import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import PokeAPI from './services/PokeAPI'
import Poke from './Poke'
import { FastAverageColor } from 'fast-average-color'
import ColorAPI from './services/ColorAPI'
import './App.css'

const App = () => {
  const [Id, setId] = useState(null)
  const [name, setName] = useState(null)
  const [spriteColor, setSpriteColor] = useState(null)
  const [sprite, setSprite] = useState(null)
  const [types, setTypes] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [species, setSpecies] = useState([])
  const [currentBox, setCurrentBox] = useState(1)
  const [cellPerBox, setCellPerBox] = useState(30)
  const [loading, setLoading] = useState(false)
  const [palette, setPalette] = useState({ color: [], isDark: false })

  const fac = new FastAverageColor()

  // Pokemon Api load count
  const limit = 200
  const offset = 905

  // Color Scheme
  const { palettes, isDark } = palette
  const [ color1, color2, color3 ] = palettes || []

  // Event Handlers
  const handleMouseClick = (pokemon_id, pokemon_name, sprite_color, pokemon_sprite, pokemon_types) => {
    setId(pokemon_id)
    setName(pokemon_name)
    setSprite(pokemon_sprite)
    setSpriteColor(sprite_color)
    setTypes(pokemon_types)
  }

  const handlePalette = (palettes, isDark) => {
    setPalette({ 
      palettes, 
      isDark 
    })
  }

  const openBoxes = (box) => {
    console.log(box)
  }

  // API Loading
  const loadPokedex = async () => {
    try {
      setLoading(true)
      // Get Initial List
      const response = await PokeAPI.getPokedexList(limit, offset)
      const id = response.data.results.map((pokemon) => {
        const urlParts = pokemon.url.split('/')
        return parseInt(urlParts[urlParts.length - 2], 10)
      }).filter((pokemonId) => pokemonId < 10000)

      // Get Details
      const res = id.map((pokemon) => PokeAPI.getPokemonById(pokemon))
      const detailedResponse = await Promise.all(res)
      const dataArray = detailedResponse.map((res) => res.data)
      setPokedex(dataArray)

      // Get Species Data
      const resp = id.map((pokemon) => PokeAPI.getPokemonSpeciesById(pokemon))
      const speciesResponse = await Promise.all(resp)
      const speciesArray = speciesResponse.map((res) => res.data)
      setSpecies(speciesArray)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const loadSprite = async () => {
    if (spriteColor !== null) {
      try {
        const avColor = await fac.getColorAsync(spriteColor, {
          ignoredColor: [
            [255, 255, 255, 255],
            [0, 0, 0, 255]
          ]
        })
        await colorScheme(avColor.hex, avColor.isDark)
      } catch (error) {
        throw error
      }
    }
  }

  const colorScheme = async (color, isDark) => {
    try {
      const response = await ColorAPI.getScheme(color.slice(1))
      const colors = response.data.colors.map((color) => color.hex)
      const hexes = colors.map((hex) => hex.value)
      handlePalette(hexes, isDark)
    } catch (error) {
      throw error
    }
  }

  // API UseEffects
  useEffect(() => {
    loadPokedex()
  }, [])

  useEffect(() => {
    loadSprite()
  }, [spriteColor])

  return (
    <div className='flex font-roboto'>
      <Sidebar />
      <div className='flex w-full' style={{ backgroundColor: color1, transition: 'background-color 0.3s ease' }}>
        {
          loading ? <></> : 
            <Poke
              palette={palette} 
              pokedex={pokedex} 
              species={species}
              limit={limit} 
              Id={Id} 
              name={name} 
              sprite={sprite} 
              types={types}
              cellPerBox={cellPerBox}
              currentBox={currentBox} 
              setCurrentBox={setCurrentBox} 
              handleMouseClick={handleMouseClick}
              openBoxes={openBoxes}/>
        }
      </div>
    </div>
  )
}

export default App