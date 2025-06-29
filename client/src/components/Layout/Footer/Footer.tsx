import { FC, memo } from "react";
import Link from "next/link";
import "./Footer.css";
import { Logo } from "@/components/Logo";
import { FooterData } from "@/types/global";
import LegalLinks from "./LegalLinks";
import SocialLinks from "./SocialLinks";

interface FooterProps {
  data: FooterData
}

const Footer: FC<FooterProps> = memo(({ data }) => {
  if (!data) return null;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Logo showText={true}/>
            <p className="tagline">Practical programming courses for all levels</p>
          </div>
          <div className="footer__list">
            {data.linkGroups.map((item) => (
              <div className="footer__group" key={item.title}>
                <h4 className="footer__title">{item.title}</h4>
                <ul className="footer__links">
                  {item.links.map((link) => (
                    <li className="footer__item" key={link.text}>
                      <Link href={link.url} className="footer__link link" key={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__social">
          <SocialLinks links={data.socialLinks} />
          <div className="footer__form">
            <form className="subscribe form">
              <div className="subscribe__email">
                <input className="subscribe__input" type="email" name="email" id="email" placeholder="Input yout email*"/>
              </div>
              <div className="subscribe__submit">
                <button className="btn btn--subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            &copy; {new Date().getFullYear()} CoursePlatform. All rights reserved.
          </div>
          <LegalLinks links={data.legalLinks}/>
        </div>
      </div>
    </footer>
  )
})

export default Footer