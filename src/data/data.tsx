import {
  Code,
  Browser,
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  PaperPlaneTilt,
} from '@phosphor-icons/react';

import cardle from '../assets/images/cardle.webp';
import todo from '../assets/images/todo.webp';
import ecfolio from '../assets/images/ecfolio.webp';

// ==============================================
// COMMON
// ==============================================
export const links: string[] = ['Portfolio', 'About', 'Contact'];
export type ctaProps = {
  icon: JSX.Element;
  url?: string;
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
  cta: string;
};
export const homeData: home = {
  heading: "Hi, I'm Eric.",
  emoji: '🚀',
  // TODO: this will be array of interests in future to animate, or maybe put on about page
  subheading: 'I am a Full-Stack Developer.',
  cta: 'View my work',
};

// ==============================================
// PORTFOLIO
// ==============================================
type projectLinks = 'code' | 'site';
export type projectlink = Record<projectLinks, ctaProps>;
type project = {
  img: string;
  title: string;
  stack: string;
  description: string;
  links: projectlink;
};

type headings = 'heading' | 'subheading';
type folio = {
  headings: Record<headings, string>;
  projects: project[];
};
export const folioData: folio = {
  headings: {
    heading: 'My Portfolio',
    subheading:
      'Here are just some of the ideas I have been able to make come to life so far.',
  },
  projects: [
    {
      img: ecfolio,
      title: 'EcFolio',
      stack:
        'Tailwind | Framer Motion | TypeScript | React (Router) | Github Actions',
      description:
        'The site you are on right now. Used as an introduction into modern React and TypeScript development. Also taking this time to get my feet wet in the entire development lifecycle. Excited to implement this knowledge with backend development!',
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
      stack: 'HTML | CSS | JS | Web APIs | MVC',
      description:
        'A simple Wordle/Worldle derivitive that prompts you to guess a car manufacturer. Used as additional practice for Vanilla JS concepts that would aid in transitioning to React easier. [WIP] - Full Stack implementation.',
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
      stack: 'HTML | CSS | JS | Web APIs | Basic CRUD | MVC',
      description:
        "Reactive todo app. Following an MVC pattern. Roughly inspired by Apple's reminders app. Tried implementing an intuitive UX that flows with user inputs. Basic CRUD fundamentals sans database.",
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
type skill = '.github' | 'client' | 'server';
export type skillTree = Record<skill, string[]>;
type about = {
  heading: JSX.Element;
  paragraphs: string[];
  skills: skillTree;
  cta: string;
};
export const aboutData: about = {
  heading: (
    <>
      I&apos;m Eric Chi, a Boston based <b>Front End Developer</b> open to
      remote or relocation opportunities.
    </>
  ),
  paragraphs: [
    'My stack of choice on the Front End is Tailwind, TypeScript, and React. The developer experience surrounding these technologies has been extremely enjoyable as of late. Especially coming from vanilla CSS and JavaScript. However, taking the time to learn the underlying technologies before the abstractions has made the transition easier, and I am confident I would be able to apply my skills to any tech stack if necessary.',

    'Even though I have been focusing on the front end, understanding how an entire app functions has been a large source of motivation for me and transitioning into a full stack, or even purely back end developer is a goal of mine. Finding a company that could facilitate such growth would be ideal.',

    'While not being completely engulfed in the tech world, you can find me in the gym, in nature,going for a drive in my car or motorcycle. Generally just trying to lead an active lifestyle.',
  ],
  skills: {
    '.github': ['actions.yml'],
    client: ['.html', '.css', '.tailwind', '.js', '.ts', '.react'],
    server: ['.node', '.express'],
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
    'Please get in touch if you believe I would be a good fit for your company.',
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
