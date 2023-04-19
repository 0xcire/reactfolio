import { Variants } from 'framer-motion';
import {
  Browser,
  Code,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from '@phosphor-icons/react';

import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiAstro,
  SiReact,
  SiReactrouter,
  SiReacthookform,
  SiVite,
  SiVitest,
  SiGithubactions,
} from 'react-icons/si';

import food_service from '@/assets/images/food_service.webp';
import cardle from '@/assets/images/cardle.webp';
import ecfolio from '@/assets/images/ecfolio.webp';
import todo from '@/assets/images/todo.webp';
// import { IconType } from 'react-icons';

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
  stack: Array<JSX.Element>;
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
      img: food_service,
      title: 'Food Service Demo',
      stack: [
        <SiAstro aria-describedby='tooltip-astro' key='astro-icon' />,
        <SiSass key='sass-icon' />,
        <SiGithubactions key='gh-icon' />,
        <SiVite key='vite-icon' />,
      ],
      description:
        'A figma design to working site implementation. Built with Astro and SCSS.',
      links: {
        code: {
          icon: <Code size={20} />,
          url: 'https://github.com/0xcire/food_service',
        },
        site: {
          icon: <Browser size={20} />,
          url: 'https://0xcire.github.io/food_service/',
        },
      },
    },
    {
      img: ecfolio,
      title: 'EcFolio',
      stack: [
        <SiTailwindcss key='tw-icon' />,
        <SiTypescript key='ts-icon' />,
        <SiReact key='react-icon' />,
        <SiReactrouter key='rr-icon' />,
        <SiReacthookform key='rhf-icon' />,
        <SiVitest key='vt-icon' />,
        <SiGithubactions key='gh-icon' />,
        <SiVite key='vite-icon' />,
      ],
      description:
        'This portfolio website. Built with Tailwind, React, TypeScript. Minimal CI/CD pipeline.',
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
      stack: [
        <SiHtml5 key='html-icon' />,
        <SiCss3 key='css-icon' />,
        <SiJavascript key='js-icon' />,
        <SiVite key='vite-icon' />,
      ],
      description:
        'A Worldle inspired game that requires you to guess the car manufacturer.',
      links: {
        code: {
          icon: <Code size={20} />,
          url: 'https://github.com/0xcire/new_cardle',
        },
        site: {
          icon: <Browser size={20} />,
          url: 'https://0xcire.github.io/new_cardle/',
        },
      },
    },
    {
      img: todo,
      title: 'Todo App',
      stack: [
        <SiHtml5 key='html-icon' />,
        <SiCss3 key='css-icon' />,
        <SiJavascript key='js-icon' />,
        <SiVite key='vite-icon' />,
      ],
      description:
        'Todo app focused on implementing intuitive UX, accessibility, and reactive UI updates.',
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
    'Currently looking for first professional role. I have a passion for clean architecture and crafting scalable applications.',

    "My full-stack of choice is currently MERN stack. That being said, understanding core fundamentals is important to me and I always strive to learn the 'core' implementation before learning the abstraction. I.e. learning AWS deployment before using Vercel. JavaScript into React. Et cetera. And I am confident I could apply that knowledge to new technologies if necessary.",

    'While not being completely engulfed in the tech world, you can find me in the gym, in nature, or going for a drive in my car or motorcycle. Generally just trying to lead an active lifestyle.',
  ],
  skills: {
    '.github': ['actions.yml'],
    client: [
      '.html',
      '.css',
      '.scss',
      '.tailwind',
      '.js',
      '.ts',
      '.react',
      '.astro',
    ],
    server: ['.node', '.express'],
    db: ['.mongodb'],
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
  cta: Pick<ctaProps, 'icon' | 'text'>;
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
