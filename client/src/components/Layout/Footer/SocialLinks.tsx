import { SocialLinkItem } from '@/types/global'
import Link from 'next/link'
import { FC } from 'react'

interface SocialLinksProps {
  data: SocialLinkItem[]
}

const SocialLinks: FC<SocialLinksProps> = ({ data }) => {
  return (
    <div className="footer__social-links">
      {
        data.map((link) => (
          <Link 
            href={link.path} 
            className="footer__social-link"
            target="_black"
            rel="noopener noreferrer"
            aria-label={link.name}
            key={link.path}
          >
            <svg className="footer__social-icon" data-name={link.slug}>
              <use href={`/icons/social-sprite.svg#${link.slug}`}/>
            </svg>
          </Link>
        ))
      }
    </div>
  )
}

export default SocialLinks