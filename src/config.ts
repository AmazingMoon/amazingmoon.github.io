import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://amazingmoon.github.io/",
  author: "Amazing Chen",
  desc: "Amazing's  Blog",
  title: "Amazing",
  lightAndDarkMode: true,
  postPerPage: 3,
  ogImage: "",
};

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 40,
  height: 40,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/AmazingMoon",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/amcee3000",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/amcee3000",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:804721028@qq.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
