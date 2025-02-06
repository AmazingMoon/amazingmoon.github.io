import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://amazingmoon.github.io",
  author: "Amazing Chen",
  desc: "Amazing's  Blog",
  title: "Amazing",
  lightAndDarkMode: true,
  postPerPage: 3,
  ogImage: "",
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 40,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/AmazingMoon",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "X",
    href: "https://twitter.com/amcee3000",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:804721028@qq.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
