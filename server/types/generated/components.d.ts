import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsGroupLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_group_links';
  info: {
    displayName: 'Group Link';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    legalLinks: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
    linkGroups: Schema.Attribute.Component<'elements.group-link', true> &
      Schema.Attribute.Required;
    socialLinks: Schema.Attribute.Component<'elements.social-link', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.group-link': ElementsGroupLink;
      'elements.link': ElementsLink;
      'elements.social-link': ElementsSocialLink;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
