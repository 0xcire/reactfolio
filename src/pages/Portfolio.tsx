import { LazyMotion, m, domAnimation } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { folioData } from '../data/data';

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Portfolio() {
  const { heading, subheading } = folioData.headings;
  const { projects } = folioData;
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className='bg-primary-dark text-text-dark'
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <section
          id='portfolio'
          className='portfolio py-12 px-6 sm:px-12 lg:px-28 lg:my-4 h-full'
        >
          <h1 className='text-2xl 2xl:text-3xl leading-loose'>{heading}</h1>
          <p>{subheading}</p>
          <div className='h-full py-6 lg:pt-14 sm:w-8/12 sm:mx-auto lg:w-full lg:grid grid-cols-2 lg:gap-8 2xl:grid-cols-3'>
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
