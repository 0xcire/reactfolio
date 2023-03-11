import { useEffect, useRef } from 'react';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import baffle from 'baffle';
import ProjectCard from '../components/ProjectCard';

//TODO: add to data.ts
import cardle from '../assets/images/cardle.png';
import todo from '../assets/images/todo.png';
import ecfolio from '../assets/images/ecfolio.png';
const characters = [
  '█',
  '▓',
  '▒',
  '░',
  '█',
  '▓',
  '▒',
  '░',
  '█',
  '▓',
  '▒',
  '░',
  '<',
  '>',
  '/',
];

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Portfolio() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const animateHeading = () => {
    const target = baffle(headingRef.current);
    target.set({
      characters: characters,
    });
    target.start();
    setTimeout(() => target.reveal(), 750);
  };

  useEffect(() => {
    animateHeading();
  }, []);

  // extract data out to 'portfolio.ts' as objects
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='bg-primary-dark text-text-dark'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <section className='portfolio py-12 px-6 lg:px-28 h-full'>
          <h1
            className='text-2xl 2xl:text-[34px] leading-loose font-bold sm:text-center'
            ref={headingRef}
          >
            Portfolio
          </h1>
          <div className='h-full sm:w-8/12 sm:mx-auto lg:w-full lg:grid grid-cols-2 lg:gap-8 2xl:grid-cols-3'>
            <ProjectCard
              image={ecfolio}
              title='Cardle'
              stack={
                'Tailwind | Framer Motion | TypeScript | React (Router) | Github Actions'
              }
              description='The site you are on right now. Used as an introduction into modern React and TypeScript development. Also taking this time to get my feet wet in the entire development lifecycle. Excited to implement this knowledge with backend development!'
              codeLink='https://github.com/0xcire/new_cardle'
              siteLink='https://0xcire.github.io/new_cardle/'
            />
            <ProjectCard
              image={cardle}
              title='Cardle'
              stack='HTML | CSS | JS | Web APIs | MVC'
              description='A simple Wordle/Worldle derivitive that prompts you to guess a car manufacturer. Used as additional practice for Vanilla JS concepts that would aid in transitioning to React easier. [WIP] - Full Stack implementation.'
              codeLink='https://github.com/0xcire/new_cardle'
              siteLink='https://0xcire.github.io/new_cardle/'
            />
            <ProjectCard
              image={todo}
              title='Todo'
              stack='HTML | CSS | JS | Web APIs | Basic CRUD | MVC'
              description="Reactive todo app. Following an MVC pattern. Roughly inspired by Apple's reminders app. Tried implementing an intuitive UX that flows with user inputs. Basic CRUD fundamentals sans database."
              codeLink='https://github.com/0xcire/new_cardle'
              siteLink='https://0xcire.github.io/new_cardle/'
            />
          </div>
        </section>
      </m.div>
    </LazyMotion>
  );
}

export default Portfolio;
