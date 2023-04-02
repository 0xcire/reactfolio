import { m } from 'framer-motion';

import TransitionContainer from '@/components/Layout/TransitionContainer';
import HideOverflow from '@/components/Layout/HideOverflow';
import ProjectCard from './components/ProjectCard';

import { folioData, springReveal } from '@/data/data';

function Portfolio() {
  const { heading, subheading } = folioData.headings;
  const { projects } = folioData;

  return (
    <TransitionContainer>
      <section
        id='portfolio'
        className='px-6 sm:px-12 lg:px-28'
        data-testid='portfolio-section'
      >
        <HideOverflow>
          <m.h1 className='text-3xl' variants={springReveal}>
            {heading}
          </m.h1>
        </HideOverflow>

        <HideOverflow className='mb-12'>
          <m.p
            className='overflow-hidden xl:text-[18px]'
            variants={springReveal}
          >
            {subheading}
          </m.p>
        </HideOverflow>

        <div className='sm:mx-auto sm:w-8/12 lg:grid lg:w-full lg:grid-cols-2 lg:gap-8 xl:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.img}
              title={project.title}
              stack={project.stack}
              description={project.description}
              links={project.links}
            />
          ))}
        </div>
      </section>
    </TransitionContainer>
  );
}

export default Portfolio;
