import React from 'react'

const Container = ({ children, className, style }) => {

  return (
    <div className={`flex ${className}`} style={style}>
      { children }
    </div>
  )
}

export default Container