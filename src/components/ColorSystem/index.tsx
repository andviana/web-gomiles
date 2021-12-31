import React from 'react'

export interface IColorSystem{
  color?:string,
  title:string,
  subtitle:string,
  textColor?:string
}

const ColorSystem:React.FC<IColorSystem> = ({color, title, subtitle, textColor}) => {
  const classDivColor = `card bg-${color||'primary'} ${textColor || 'text-white'} shadow`
  const classTextColor = `${textColor || 'text-white-50'} small`
  return (

      <div className='col-lg-6 mb-4'>
        <div className={classDivColor}>
          <div className='card-body'>
            {title}
            <div className={classTextColor}>{subtitle}</div>
          </div>
        </div>
      </div>

  )
}

export default ColorSystem
