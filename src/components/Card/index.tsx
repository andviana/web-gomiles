import React from 'react'
interface ICard {
  title: string
}
const Card: React.FC<ICard> = ({ title, children }) => {
  return (
    <>
      <div className='card shadow mb-4'>
        <div className='card-header py-3'>
          <h6 className='m-0 font-weight-bold text-primary'>{title}</h6>
        </div>
        <div className='card-body'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Card
