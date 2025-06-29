'use client'

import { FC, memo, useState } from "react";
import { HeaderData } from "@/types/global";
import "./Header.css";
import Nav from "@/components/Nav/Nav";
import { Logo } from "@/components/Logo";
import NavBurger from "@/components/NavBurger/NavBurger";
import NavButtons from "@/components/NavButtons/NavButtons";

interface HeaderProps {
  data: HeaderData
  isAuth: boolean
}

const Header: FC<HeaderProps> = memo(({ data, isAuth }) => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  
  const toggleBurger = () => {    
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
       <div className="header__inner">
        <Logo/>
        <NavBurger isOpen={isOpen} toggleBurger={toggleBurger}/>
        <Nav links={data.navigation} isOpen={isOpen}/>
        <NavButtons isAuth={isAuth}/>
      </div>
    </header>
  )
})

export default Header

