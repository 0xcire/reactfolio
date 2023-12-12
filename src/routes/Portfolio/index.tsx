import { m } from 'framer-motion';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import TransitionContainer from '@/components/Layout/TransitionContainer';
import HideOverflow from '@/components/Layout/HideOverflow';
import ProjectCard from './components/ProjectCard';

import { folioData, springReveal } from '@/data/data';

function Portfolio() {
  const { heading, subheading } = folioData.headings;
  const { projects } = folioData;
  useDocumentTitle('Portfolio | ECFolio');

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
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
          {projects.map(({ img, title, description, links }, index) => (
            <ProjectCard
              key={index}
              image={img}
              title={title}
              description={description}
              links={links}
            />
          ))}
        </div>
      </section>
    </TransitionContainer>
  );
}

export default Portfolio;
