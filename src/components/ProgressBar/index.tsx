import React from 'react'

export interface IProgressBar {
  color?:string,
  title: string,
  percent: number,
  labelPercent?: string
}

const ProgressBar: React.FC<IProgressBar> = ({ color, title, percent, labelPercent }) => {
  const classDivColor = `progress-bar bg-${color || 'primary'}`
  const textPercent = `${percent}%`
  return (
    <>
      <h4 className='small font-weight-bold'>{title} <span
        className='float-right'>{labelPercent || textPercent}</span></h4>
      <div className='progress mb-4'>
        <div className={classDivColor} role='progressbar' style={{ width: textPercent }}></div>
      </div>

    </>
  )
}

export default ProgressBar;


