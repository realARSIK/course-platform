export interface LinkItem {
  text: string;
  url: string;
}

export interface SocialLinkItem extends LinkItem {
  iconName: string;
}

export interface LinkGroups {
  title: string;
  links: LinkItem[];
}

export interface HeaderData {
  navigation: LinkItem[];
}

export interface FooterData {
  linkGroups: LinkGroups[];
  socialLinks: SocialLinkItem[];
  legalLinks: LinkItem[];
}

export interface GlobalSettings {
  title: string,
  description: string,
  header: HeaderData;
  footer: FooterData;
}

export interface GlobalSettingsResponse {
  data: GlobalSettings
}