import Link from 'next/link'
import './Logo.css'
import { FC } from 'react';

interface LogoProps {
  showText?: boolean;
}

export const Logo: FC<LogoProps> = ({ showText }) => {
  return (
    <Link href="/" className="logo">
      <svg className="logo__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.53 61.59" fill="currentcolor">
        <path d="M24.74 61.56h-9.83c-2.12 0-2.66-.78-1.95-2.8q2.71-7.58 5.61-15.09a2.11 2.11 0 0 0-.86-3C12.6 36.93 7.57 33.07 2.5 29.25c-3.31-2.5-3.35-4.17 0-6.66C12.07 15.41 21.71 8.28 31.32 1.1A5.21 5.21 0 0 1 34.6 0H53c2.91 0 3.43.89 2.38 3.65-1.78 4.69-3.5 9.41-5.34 14.08a2.63 2.63 0 0 0 1.05 3.56c5.22 3.85 10.38 7.77 15.53 11.7 2.55 1.94 2.54 3.75-.06 5.7q-14.64 11-29.32 21.89a4.74 4.74 0 0 1-3.1 1c-3.14-.05-6.27 0-9.41 0zm3.1-41.06a15.36 15.36 0 0 0-4 2.66c-2.74 2-2.75 3.48-.05 5.54 4.21 3.3 8.49 6.53 12.82 9.69 5.12 3.75 3.14 3.79 8.6-.2 2.2-1.61 2.14-3.2-.06-4.87-5.27-4-10.58-8-15.87-11.93-.44-.32-.93-.58-1.44-.89z"/>
      </svg>
      {showText && <span className="logo__text">ARS</span>}
    </Link>
  )
}