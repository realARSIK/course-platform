import { GlobalSettings } from "./types/global";


export const mockGlobalSettings: GlobalSettings = {
  header: {
    logo: '/logo.svg',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Courses', path: '/courses' },
      { name: 'Community', path: '/community' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contacts' },
    ]
  },
  footer: {
    main: [
      {
        title: 'Courses', 
        links: [
          { name: 'JavaScript', path: '/courses/javascript' },
          { name: 'React', path: '/courses/react' },
          { name: 'TypeScript', path: '/courses/typescript' },
          { name: 'NextJS', path: '/courses/nextjs' },
        ]
      },
      {
        title: 'Lessons', 
        links: [
          { name: 'Start JS', path: '/courses/javascript/start' },
          { name: 'Interface or type', path: '/courses/typescript/tnterface-or-type' },
          { name: 'SSR in NextJS', path: '/courses/nextjs/ssr' },
          { name: 'Redux', path: '/courses/react/redux' },
        ]
      },
      {
        title: 'Resources',
        links: [
          { name: 'News', path: '/news' },
          { name: 'Tutorials', path: '/tutorials' },
          { name: 'Community', path: '/community' },
        ]
      },
      {
        title: 'Company',
        links: [
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contacts' },
          { name: 'FAQ', path: '/faq' },
        ]
      },
    ],
    social: [
      { name: 'Telegram', slug: 'telegram', path: '/telegram' },
      { name: 'Github', slug: 'github', path: '/github' },
      { name: 'Youtube', slug: 'youtube', path: '/youtube' },
    ],
    legalLinks: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Use of Cookies', path: '/cookies' },
      { name: 'Terms of Use', path: '/terms' },
    ],
  },
};
