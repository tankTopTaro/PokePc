import React, { useEffect, useState } from 'react'
import Container from './Container'
import pokeball from '../assets/pokeball.svg'
import { FastAverageColor } from 'fast-average-color'
import ColorAPI from '../services/ColorAPI'

const Entries = ({ Id, name, sprite_color, sprite, types, handlePalette }) => {
  const fac = new FastAverageColor()

  const formatId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id.toString()
  }

  const loadSprite = () => {
    if (sprite_color !== null) {
      const avColor = fac.getColorAsync(sprite_color, {
        ignoredColor: [
          [255, 255, 255, 255], // white
          [0, 0, 0, 255] // black
        ]
      })
      avColor.then((color) => {
        colorScheme(color.hex, color.isLight, color.isDark)
      }).catch((e) => {
        console.log(e)
      })
    }
  }

  const colorScheme = async (color, isLight, isDark) => {
    try {
      const response = await ColorAPI.getScheme(color.slice(1))
      const colors = response.data.colors.map((color) => color.hex)
      const hexes = colors.map((hex) => hex.value)
      handlePalette(hexes, isLight, isDark)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    loadSprite()

  }, [sprite_color])
  return (
    <Container className="items-center justify-center w-1/4 h-screen border-solid border-l-2 px-4">
        <div className='flex-auto flex-col w-full items-center mx-3'>
          <div className='sprite-container mb-4'> 
            <img src={sprite !== null ? sprite : pokeball} alt={name} loading='lazy' />
          </div>
          <div className='text-center mb-4'> 
            <h4 className='text-lg'>{Id !== null ? `# ${formatId(Id)}` : '# 000'}</h4>
            <h3 className='text-xl'>{name !== null ? name.charAt(0).toUpperCase() + name.slice(1) : 'Pokemon'}</h3>
          </div>
          <div className='flex flex-col text-center mb-4 gap-2'>
            {types !== null ? types.map((el) => {
              return <h4 className='mb-4 ring-2 ring-offset-2 bg-transparent font-semibold px-4 py-2  rounded' key={el.type.name}>{el.type.name}</h4>
            }) : ''}
          </div>
        </div>
    </Container>
  )
}

export default Entries