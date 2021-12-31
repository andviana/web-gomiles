import React from 'react'
interface INavItem {
  title: string,
  active?: boolean,
  target: string,
  faIcon: string
}

const NavItem: React.FC<INavItem> = ({ title, active, target, faIcon }) => {
  const classLiActive = `nav-item ${!active || 'active'}`
  const classIcon = `fa-fw ${faIcon || 'fas fa-home'}`
  return (
    <li className={classLiActive}>
      <a className='nav-link' href={target}>
        <i className={classIcon}></i>
        <span>{title}</span></a>
    </li>
  )
}

export default NavItem;
