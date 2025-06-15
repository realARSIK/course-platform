export interface LinkItem {
  name: string;
  path: string;
}

export interface SocialLinkItem extends LinkItem {
  slug: string;
}

export interface LinkGroup {
  title: string;
  links: LinkItem[];
}

export interface HeaderData {
  logo: string;
  links: LinkItem[];
}

export interface FooterData {
  main: LinkGroup[];
  social: SocialLinkItem[];
  legalLinks: LinkItem[];
}

export interface GlobalSettings {
  header: HeaderData;
  footer: FooterData;
}