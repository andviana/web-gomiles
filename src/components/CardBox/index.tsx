import React, { Children } from 'react';

interface ICardBox{
  title?:string,
  contentText?:string,
  border?: string,
  faIcon?:string
}
const CardBox:React.FC<ICardBox> = ({title, contentText, border, faIcon, children}) => {

  const classDivBorder = `card shadow h-100 py-2 border-left-${border || 'primary'}`;
  const classDivIcon = `fa-2x text-gray-300 ${faIcon || 'fas fa-calendar'}`
  const classDivTitle = `text-xs font-weight-bold text-${border || 'primary'} text-uppercase mb-1`

  return (
    <div className='col-xl-3 col-md-6 mb-4'>
      <div className={classDivBorder}>
        <div className='card-body'>
          <div className='row no-gutters align-items-center'>
            <div className='col mr-2'>
              <div className={classDivTitle}>
                {title || 'Infomar Titulo'}</div>
                {children ?? (
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>{contentText || 'conteúdo'}</div>
                )}
            </div>
            <div className='col-auto'>
              <i className={classDivIcon}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBox
