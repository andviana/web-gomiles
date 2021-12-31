import React from 'react'
import ColorSystem, { IColorSystem } from '../ColorSystem'

interface IColorSystemGroup {
  items: IColorSystem[];
}
const ColorSystemGroup:React.FC<IColorSystemGroup> = ({items}) => {
  return (
    <>
      {items.map((props,key)=>(
        <ColorSystem key={key} {...props} />
      ))}

    </>
  )
}

export default ColorSystemGroup
