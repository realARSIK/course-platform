import { LinkItem } from '@/types/global'
import Link from 'next/link'
import { FC } from 'react'

interface LegalLinksProps {
  links: LinkItem[]
}

const LegalLinks: FC<LegalLinksProps> = ({ links }) => {
  return (
    <div className="legal">
      <ul className="legal__list">
        {links.map((link) => (
          <li className="legal__item" key={link.url}>
            <Link href={link.url} className="legal__link link">{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LegalLinks