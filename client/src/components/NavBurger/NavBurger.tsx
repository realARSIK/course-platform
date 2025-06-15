import { FC } from 'react'
import './NavBurger.css'

interface NavBurgerProps {
  isOpen: boolean
  toggleBurger: () => void
}

const NavBurger: FC<NavBurgerProps> = ({ isOpen, toggleBurger }) => {
  return (
    <svg 
      className={`nav__button${isOpen ? ' nav__button--active' : ''}`} 
      viewBox="0 0 100 100" 
      width="60"
      onClick={() => toggleBurger()}
      role="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      // tabIndex={0}
    >
      <path
        className="nav__button-line nav__button-line--top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path
        className="nav__button-line nav__button-line--middle"
        d="m 30,50 h 40"
      />
      <path 
        className="nav__button-line nav__button-line--bottom" 
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </svg>
  )
}

export default NavBurger