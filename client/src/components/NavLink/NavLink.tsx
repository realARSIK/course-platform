"use client"

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkItem } from '@/types/global'
import './NavLink.css'

interface NavLinkProps extends LinkItem {}

const NavLink: FC<NavLinkProps> = ({ name, path }) => {
  const pathname = usePathname()
  const isActive = pathname === path
  const newClassName = `nav__link ${isActive ? 'nav__link--active' : 'link'}`

  return (
    <Link href={path} className={newClassName}>
      {name}
    </Link>
  )
}

export default NavLink