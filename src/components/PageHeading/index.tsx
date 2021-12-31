import React from 'react'

interface IPageHeading {
  title: string,
  btnLabel:string,
  btnTarget:string,
  btnFaIcon:string,
  btnColor:string,

}
const PageHeading: React.FC<IPageHeading> = ({ title, btnFaIcon, btnLabel, btnTarget, btnColor }) => {
  return (
    <div className='d-sm-flex align-items-center justify-content-between mb-4'>
      <h1 className='h3 mb-0 text-gray-800'>{title}</h1>
      <a href={btnTarget} className={`d-none d-sm-inline-block btn btn-sm btn-${btnColor} shadow-sm`}><i
        className={`${btnFaIcon} fa-sm text-white-50`}></i> {btnLabel}</a>
    </div>
  )
}

export default PageHeading
