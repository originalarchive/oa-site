import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "original archive",
  EMAIL: "ken@originalarchive.net",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "home",
  DESCRIPTION: "original archive by Ken Marlow is a showcase for my portfolio and articles.",
};

export const BLOG: Metadata = {
  TITLE: "articles",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "photography",
  DESCRIPTION: "A collection of my image galleries and my main portfolio.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "reddit",
    HREF: "https://www.reddit.com/user/Originalarchive/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  },
  { 
    NAME: "threads",
    HREF: "https://www.threads.com/@originalarchive?igshid=NTc4MTIwNjQ2YQ==",
  }
];
