import { FC, memo } from "react";
import Link from "next/link";
import LegalLinks from "./LegalLinks";
import "./Footer.css";
import { FooterData } from "@/types/global";
import Logo from "@/components/Logo/Logo";
import SocialLinks from "./SocialLinks";

interface FooterProps {
  data: FooterData
}

const Footer: FC<FooterProps> = ({ data }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Logo showText={true}/>
            <p className="tagline">Practical programming courses for all levels</p>
          </div>
          <div className="footer__list">
            {
              data.main.map((item) => (
                <div className="footer__group" key={item.title}>
                  <h4 className="footer__title">{item.title}</h4>
                  <ul className="footer__links">
                    {item.links.map((link) => (
                      <li className="footer__item" key={link.name}>
                        <Link href={link.path} className="footer__link link" key={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        <div className="footer__social">
          <SocialLinks data={data.social} />
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
          <LegalLinks items={data.legalLinks}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer