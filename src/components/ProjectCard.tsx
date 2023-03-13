import { Link } from 'react-router-dom';
import { Code } from '@phosphor-icons/react';
import { Browser } from '@phosphor-icons/react';

type CardProps = {
  image: string;
  title: string;
  stack: string;
  description: string;
  codeLink: string;
  siteLink: string;
};

// adjust img matching up
// TODO: pass object from ./src/data to clean this
function ProjectCard({
  image,
  title,
  stack,
  description,
  codeLink,
  siteLink,
}: CardProps) {
  // pb-4 my-6
  return (
    // xl:flex-row xl:p-4
    <div className='flex flex-col justify-between rounded-md shadow-md shadow-[#121d2c] my-8 lg:my-8'>
      <div className=''>
        <img
          className='rounded-md max-h-[315px] w-full h-auto xl:h-full xl:w-auto xl:my-auto'
          src={image}
          alt={`${title}-img`}
          loading='lazy'
        />
      </div>

      {/* xl:flex xl:flex-col xl:w-5/12 */}
      <div className='card-body'>
        <div className='card-text mt-4 py-4 xl:pt-0 px-12'>
          <h3 className='font-bold text-xl'>{title}</h3>

          <p className='stack my-2 text-[14px]'>{stack}</p>
          <p className='text-[14px]'>{description}</p>
        </div>
        <div className='buttons flex justify-between my-4 px-12'>
          <Link
            className='flex items-center py-2 px-4 rounded-md bg-accent-dark text-center text-text-light'
            to={`${codeLink}`}
            target='_blank'
          >
            <Code className='mr-2' size={18} />
            Code
          </Link>
          <Link
            className='flex items-center py-2 px-4 rounded-md bg-accent-dark text-center  text-text-light'
            to={`${siteLink}`}
            target='_blank'
          >
            <Browser className='mr-2' size={18} />
            Live
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
