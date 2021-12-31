import React from 'react'

interface IHeading {
  title: string
}
const Heading: React.FC<IHeading> = ({ title }) => {
  return (
    <div className='sidebar-heading'>
      {title}
    </div>
  )
}

export default Heading
