import { LinkItem } from '@/types/global'
import Link from 'next/link'
import React, { FC } from 'react'

interface LegalLinksProps {
  items: LinkItem[]
}

const LegalLinks: FC<LegalLinksProps> = ({ items }) => {
  return (
    <div className="legal">
      <ul className="legal__list">
        {items.map((item) => (
          <li className="legal__item" key={item.path}>
            <Link href={item.path} className="legal__link link">{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LegalLinks