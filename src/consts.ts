import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE = {
  NAME: "original archive", // Make sure NAME is uppercase here
  EMAIL: "your@email.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
};

// Articles Page  
export const ARTICLES: Page = {
  TITLE: "articles",
  DESCRIPTION: "Writing on coffee, tech, and life.",
};

// Photos Page
export const PHOTOS: Page = {
  TITLE: "photos", 
  DESCRIPTION: "Photography portfolio and albums.",
};

// Coffee Log Page
export const COFFEE: Page = {
  TITLE: "coffee log",
  DESCRIPTION: "Tracking my coffee journey, one brew at a time.",
};

// About
export const ABOUT: Page = {
  TITLE: "about",
  DESCRIPTION: "A bit about me.",
};

// Links
export const LINKS: Links = [
  { 
    TEXT: "articles", 
    HREF: "/articles",
  },
  {
    TEXT: "about", 
    HREF: "/about",
  },
  { 
    TEXT: "photos", 
    HREF: "/photos",
  },
  { 
    TEXT: "coffee log", 
    HREF: "/coffee-log",
  },
];

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "@originalarchive",
    HREF: "https://www.instagram.com/originalarchive",
  },
  { 
    NAME: "Threads",
    ICON: "threads", 
    TEXT: "@originalarchive",
    HREF: "https://www.threads.com/@originalarchive",
  },
  { 
    NAME: "Bluesky",
    ICON: "cloud",
    TEXT: "@originalarchive",
    HREF: "https://bsky.app/profile/originalarchive.bsky.social",
  },
  { 
    NAME: "Reddit",
    ICON: "reddit",
    TEXT: "u/Originalarchive",
    HREF: "https://www.reddit.com/user/Originalarchive/",
  },
];