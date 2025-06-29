import { FC } from 'react'
import { LinkItem } from '@/types/global'
import NavLink from '../NavLink/NavLink'
import './Nav.css'

interface NavProps {
  links: LinkItem[]
  isOpen: boolean
}

const Nav: FC<NavProps> = ({ links, isOpen }) => {

  return (
    <nav className={`nav${isOpen ? ' nav--open' : ''}`} aria-label="Navigation">
      <div className='nav__inner'>
        <ul className="nav__list">
          {links.map((link) => (
            <li className="nav__item" key={link.url}>
              <NavLink url={link.url} text={link.text}/>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav