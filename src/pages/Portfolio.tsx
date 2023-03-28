import { LazyMotion, m, domAnimation } from 'framer-motion';
import HideOverflow from '../components/Layout/HideOverflow';
import ProjectCard from '../components/Portfolio/ProjectCard';
import { folioData } from '../data/data';
import { pageTransition, springReveal } from '../data/data';

function Portfolio() {
  const { heading, subheading } = folioData.headings;
  const { projects } = folioData;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='bg-primary-dark text-text-dark min-h-[calc(100svh-(theme(height.header)+theme(height.footer)))] grid place-items-center'
        variants={pageTransition}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        transition={{
          delayChildren: 0.15,
          staggerChildren: 0.1,
        }}
      >
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
              className='xl:text-[18px] overflow-hidden'
              variants={springReveal}
            >
              {subheading}
            </m.p>
          </HideOverflow>

          <div className='sm:w-8/12 sm:mx-auto lg:w-full lg:grid lg:grid-cols-2 lg:gap-8 xl:grid-cols-3'>
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
      </m.div>
    </LazyMotion>
  );
}

export default Portfolio;
