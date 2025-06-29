import { SocialLinkItem } from '@/types/global'
import Link from 'next/link'
import { FC } from 'react'

interface SocialLinksProps {
  links: SocialLinkItem[]
}

const SocialLinks: FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="footer__social-links">
      {
        links.map((link) => (
          <Link 
            href={link.url} 
            className="footer__social-link"
            target="_black"
            rel="noopener noreferrer"
            aria-label={link.text}
            key={link.url}
          >
            <svg className="footer__social-icon" data-name={link.iconName}>
              <use href={`/icons/social-sprite.svg#${link.iconName}`}/>
            </svg>
          </Link>
        ))
      }
    </div>
  )
}

export default SocialLinks