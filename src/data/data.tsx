import { Variants } from 'framer-motion';
import {
  Browser,
  Code,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from '@phosphor-icons/react';

import pokedex from '@/assets/images/pokedex.webp';
import food_service from '@/assets/images/food_service.webp';
import cardle from '@/assets/images/cardle.webp';
import ecfolio from '@/assets/images/ecfolio.webp';
import todo from '@/assets/images/todo.webp';

// ==============================================
// COMMON
// ==============================================

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
  exit: { opacity: 0 },
};

export const springReveal = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
    },
  },
};

export const links: Array<string> = ['Portfolio', 'About', 'Contact'];

export type ctaProps = {
  icon?: JSX.Element;
  url: string;
  text?: string;
};
// ==============================================
// HEADER
// ==============================================

// ==============================================
// HOME
// ==============================================
type home = {
  heading: string;
  emoji: string;
  subheading: string;
  descriptors: Array<string>;
  cta: string;
};
export const homeData: home = {
  heading: "Hi, I'm Eric.",
  emoji: '🚀',
  subheading: 'I am a ',
  descriptors: [
    'Front End Developer',
    'Back End Developer',
    'Full Stack Developer',
    'wannabe boxer',
    'car enthusiast',
    'motoGP fan',
    'martial artist',
    'gamer',
  ],
  cta: 'View My Work',
};

// ==============================================
// PORTFOLIO
// ==============================================
type projectLinks = 'code' | 'site';
export type projectlink = Record<projectLinks, ctaProps>;
type project = {
  img: string;
  title: string;
  description: string;
  links: projectlink;
};

type headings = 'heading' | 'subheading';
type folio = {
  headings: Record<headings, string>;
  projects: Array<project>;
};

// TODO: from other project references, appears I am importing Icons incorrectly. address. should be able to use <Icon /> in component
export const folioData: folio = {
  headings: {
    heading: 'My Portfolio',
    subheading:
      'Here are just some of the ideas I have been able to make come to life so far.',
  },
  projects: [
    {
      img: pokedex,
      title: 'Pokedex Table',
      description: 'A filterable, and paginated table for all pokemon.',
      links: {
        code: {
          icon: <Code size={20} />,
          url: 'https://github.com/0xcire/pokedex-problem',
        },
        site: {
          icon: <Browser size={20} />,
          url: 'https://0xcire.github.io/pokedex-problem/',
        },
      },
    },
    {
      img: food_service,
      title: 'Food Service Demo',
      description: 'A figma design to working site implementation.',
      links: {
        code: {
          icon: <Code size={20} />,
          url: 'https://github.com/0xcire/food-service',
        },
        site: {
          icon: <Browser size={20} />,
          url: 'https://0xcire.github.io/food-service/',
        },
      },
    },
    {
      img: ecfolio,
      title: 'EcFolio',
      description: 'The website you are on right now!',
      links: {
        code: {
          icon: <Code size={20} />,
          url: 'https://github.com/0xcire/reactfolio',
        },
        site: {
          icon: <Browser size={20} />,
          url: 'https://ecfolio.netlify.app/',
        },
      },
    },
    {
      img: cardle,
      title: 'Cardle',
      description: 'Guess the car manufacturer.',
      links: {
        code: {
          icon: <Code size={20} />,
          url: 'https://github.com/0xcire/new-cardle',
        },
        site: {
          icon: <Browser size={20} />,
          url: 'https://0xcire.github.io/new-cardle/',
        },
      },
    },
    {
      img: todo,
      title: 'Todo App',
      description: 'Focused on managing multiple lists.',
      links: {
        code: {
          icon: <Code size={20} />,
          url: 'https://github.com/0xcire/odin-todo',
        },
        site: {
          icon: <Browser size={20} />,
          url: 'https://0xcire.github.io/odin-todo/',
        },
      },
    },
  ],
};

// ==============================================
// ABOUT
// ==============================================
type skill = '.github' | 'client' | 'server' | 'db';
export type skillTree = Record<skill, Array<string>>;
type about = {
  heading: JSX.Element;
  paragraphs: Array<string>;
  skills: skillTree;
  cta: string;
};
export const aboutData: about = {
  heading: (
    <>
      I&apos;m Eric Chi, a Boston based <b>Full Stack Developer</b> open to
      remote or relocation opportunities.
    </>
  ),
  paragraphs: [
    'Currently looking for first professional role. I have a passion for clean architecture, crafting scalable applications and creating intuitive UX experiences.',

    'I am looking to join an environment that would allow myself to grow as a developer and learn how to be an effective contributor to said team.',

    'My full-stack of choice is currently React, Node, Express, and Postgres. That being said, understanding core fundamentals is important to me and I am confident I could apply my knowledge and quick ability to learn to any tech stack if necessary.',

    'While not being engulfed by the tech world, you can find me in the gym or in nature. Generally just trying to lead an active lifestyle.',
  ],
  skills: {
    '.github': ['actions.yml'],
    client: [
      '.html',
      '.css',
      '.scss',
      '.tailwind',
      '.javascript',
      '.typescript',
      '.react',
      '.astro',
    ],
    server: ['.node', '.express'],
    db: ['.postgreSQL'],
  },
  cta: 'Get in touch',
};

// ==============================================
// CONTACT
// ==============================================
type linkName = 'Github' | 'Linkedin' | 'Email';
export type link = Record<linkName, ctaProps>;
type contact = {
  heading: string;
  subheading: string;
  linksheading: string;
  links: link;
};

export const contactData: contact = {
  heading: 'Contact me',
  subheading:
    'Please get in touch if you believe I would be a good fit for your company, or if there is a project you would like to work together on.',
  linksheading: 'Additional Links',
  links: {
    Github: {
      url: 'https://github.com/0xcire',
      icon: <GithubLogo size={20} />,
    },
    Linkedin: {
      url: 'https://www.linkedin.com/in/ericchi1/',
      icon: <LinkedinLogo size={20} />,
    },
    Email: {
      url: 'mailto:ciredeveloper@gmail.com',
      icon: <EnvelopeSimple size={20} />,
    },
  },
};
// ==============================================
// FORM
// ==============================================

type form = {
  schema: Record<'name' | 'message', string>;
  noti: Record<'success' | 'error', string>;
  placeholder: Record<'name' | 'email' | 'message', string>;
  cta: Omit<ctaProps, 'url'>;
};
export const formData: form = {
  schema: {
    name: 'Please enter your name',
    message: 'Please leave a message',
  },
  noti: {
    success: 'Thank you!',
    error: "Couldn't send message",
  },
  placeholder: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
  },
  cta: {
    icon: <PaperPlaneTilt size={20} />,
    text: 'Send',
  },
};
