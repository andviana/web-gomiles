import React from 'react'
import ProgressBar, { IProgressBar } from '../ProgressBar'

interface IProgressBarGroup {
  items: IProgressBar[]
}
const ProgressBarGroup:React.FC<IProgressBarGroup> = ({items})=> {
  return (
    <>
    {items && items.map((props, key) => (
      <ProgressBar {...props} />
    ) )}

    </>
  )
}

export default ProgressBarGroup
