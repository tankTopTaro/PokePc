import React, { useEffect, useState } from 'react'
import pokeball from '../assets/pokeball.svg'
import Types from '../assets/Types'

const Entries = ({ species, Id, name, sprite, types, palette }) => {
  const matchedSpecies = species.find((entry) => entry.id === Id)

  const flavorText = matchedSpecies && matchedSpecies.flavor_text_entries.length > 0
    ? matchedSpecies.flavor_text_entries.find(entry => entry.language.name === 'en')
    ?.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ')
    : null

  const { palettes, isDark } = palette
  const [ color1, color2, color3 ] = palettes || []

  const formatId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id.toString()
  }

  return (
    <div className='w-0 md:w-1/4 invisible md:visible' style={{ color: isDark && 'white'}}>
      <div className='w-full bg-slate-600 h-screen z-0 absolute opacity-10'></div>
      <div className="flex flex-col z-50 w-full">
          <div className="flex items-center justify-between px-4 w-full md:h-20 bg-slate-500" style={{ backgroundColor: color2, transition: 'all 0.3s ease'}}>
            { name && (
              <>
              <div className=" flex w-4/6 items-center justify-start">
                <img src={pokeball} alt="" className='object-contain h-6 origin-center rotate-12' />
                <h3 className='text-2xl xl:text-4xl ml-4'>{name !== null ? name.charAt(0).toUpperCase() + name.slice(1) : 'Pokemon'}</h3>
              </div>
              <span className='text-2xl invisible lg:visible'>{Id !== null ? `# ${formatId(Id)}` : '# 000'}</span>
              </>
            )}
          </div>
          <div className="flex items-center justify-center flex-col lg:flex-row md:h-16 m-8">
            {types.map((type) => {
              const matchedType = Types.find(t => t.type === type.type.name)
              return (
                <span 
                  key={type.type.name} 
                  className=' flex items-center justify-center mx-2 py-2 px-6 mb-1.5 text-center text-xl lg:text-2xl text-white' 
                  style={{ 
                    borderRadius: '25px', 
                    width: type.type.length < 2 ? '100px' : '100%',
                    backgroundColor: matchedType.color
                    }}>
                  {matchedType && <img src={matchedType.path} alt={type.type.name} className='h-5 mr-2'/>}
                  {type.type.name}
                </span>
              )
            })}
          </div>
          <div className="flex items-center justify-center w-full bg-slate-500 h-max px-4 py-2" >
            <div className="z-0 absolute flex items-center justify-center">
              <img src={pokeball} alt='' className='object-contain h-36 lg:h-80 opacity-40' />
            </div>
            <div className="z-30 bg-slate-500 h-80  opacity-50"></div>
            <div className="z-50">
              <img src={sprite !== null ? sprite : ''} alt={name} loading='lazy' />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full bg-slate-500 h-80 lg:h-60 mt-8 px-4 py-2" >
            <span className='text-normal xl:text-xl text-white'>{flavorText !== null ? `"${flavorText}"` : ''}</span>
          </div>
      </div>
    </div>
  )
}

export default Entries