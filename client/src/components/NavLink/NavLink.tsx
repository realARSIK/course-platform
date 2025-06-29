"use client"

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkItem } from '@/types/global'
import './NavLink.css'

interface NavLinkProps extends LinkItem {}

const NavLink: FC<NavLinkProps> = ({ text, url }) => {
  const pathname = usePathname()
  const isActive = pathname === url
  const newClassName = `nav__link ${isActive ? 'nav__link--active' : 'link'}`

  return (
    <Link href={url} className={newClassName}>
      {text}
    </Link>
  )
}

export default NavLink