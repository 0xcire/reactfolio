import { useEffect, useRef } from 'react';
import baffle from 'baffle';
import Header from '../components/Header';
import cardle from '../assets/images/cardle.png';
import todo from '../assets/images/todo.png';
import ecfolio from '../assets/images/ecfolio.png';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

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

{
  /* 
    scrollable or carousel type 
    App h-screen or min-h-screen with...
    portfolio h-screen or portfolio as a carousel type that expands to columns
    animate cards into view after heading is done rendering
  */
}

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
    <div className='bg-primary-dark h-full text-text-dark'>
      <Header />
      <section className='portfolio px-6 lg:px-28 mt-[100px] h-full'>
        <h1
          className='text-2xl 2xl:text-[34px] leading-loose font-bold sm:text-center'
          ref={headingRef}
        >
          Portfolio
        </h1>
        <div className='card-stack my-12 sm:w-8/12 sm:mx-auto lg:w-full lg:grid grid-cols-2 lg:gap-8 2xl:grid-cols-3'>
          <ProjectCard
            image={ecfolio}
            title='Cardle'
            stack={
              'Tailwind | Framer Motion | TypeScript | React (Router) | Github Actions'
            }
            description='The site you are on right now. Used as an introductory experience into modern React development and using TypeScript. Following recommended practices and...'
            codeLink='https://github.com/0xcire/new_cardle'
            siteLink='https://0xcire.github.io/new_cardle/'
          />
          <ProjectCard
            image={cardle}
            title='Cardle'
            stack='HTML | CSS | JS | Web APIs | MVC'
            description='A simple Wordle/Worldle derivitive that prompts you to guess a car manufacturer. Used as additional practice for Vanilla JS concepts that would aid in transitioning to React easier.'
            codeLink='https://github.com/0xcire/new_cardle'
            siteLink='https://0xcire.github.io/new_cardle/'
          />
          <ProjectCard
            image={todo}
            title='Todo'
            stack='HTML | CSS | JS | Web APIs | Basic CRUD | MVC'
            description="Reactive todo app. Following an MVC pattern. Roughly inspired by Apple's reminders app. Tried implementing an intuitive UX that flows with user inputs."
            codeLink='https://github.com/0xcire/new_cardle'
            siteLink='https://0xcire.github.io/new_cardle/'
          />
        </div>
      </section>
      <Footer links={true} />
    </div>
  );
}

export default Portfolio;
