/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

interface INavDropdownItem {
  title: string,
  target: string
}

interface INavDropdownGroup {
  header: string,
  group: INavDropdownItem[]
}

interface INavDropdown {
  id: string,
  title: string,
  dataParent: string,
  items: INavDropdownGroup[],
  faIcon: string
}

const NavDropdown: React.FC<INavDropdown> = ({ id, title, dataParent, items, faIcon }) => {
  return (
    <li className='nav-item'>
      <a className='nav-link collapsed' data-toggle='collapse' data-target={`#collapse${id}`}
        aria-expanded={true} aria-controls={`collapse${id}`}>
        <i className={`fa-fw ${faIcon}`}></i>
        <span>{title}</span>
      </a>
      <div id={`collapse${id}`} className='collapse' aria-labelledby='headingPages' data-parent={`#${dataParent}`}>
        <div className='bg-white py-2 collapse-inner rounded'>
          {items && items.map(({ group, header }, index) => (
            <div key={`div-${index}`}>
              <h6 className='collapse-header'>{`${header}:`}</h6>
              {group && group.map(({ target, title }, index) => (
                <a key={`a-${index}`} className='collapse-item' href={target}>{title}</a>
              ))}
              {items.length > 0 && (<div className='collapse-divider'></div>)}
            </div>
          ))}
        </div>
      </div>
    </li>

  )
}

export default NavDropdown
