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
function ProjectCard(props: CardProps) {
  return (
    <div className='card h-full flex flex-col justify-between rounded-md shadow-md shadow-[#121d2c] pb-4 my-6 lg:my-0'>
      <div className=''>
        <img
          className='rounded-md max-h-[315px] w-full h-auto'
          src={props.image}
          alt={`${props.image}-img`}
          loading='lazy'
        />
      </div>

      <div className='card-text mt-4 py-4 px-12 h-full'>
        <h3 className='font-bold text-xl'>{props.title}</h3>

        <p className='stack my-2 text-[12px]'>{props.stack}</p>
        <p className='text-[14px]'>{props.description}</p>
      </div>

      <div className='buttons flex justify-between my-4 px-12'>
        <Link
          className='flex items-center py-2 px-4 rounded-md bg-accent-dark text-center text-text-light'
          to={`${props.codeLink}`}
          target='_blank'
        >
          <Code className='mr-2' size={18} />
          Code
        </Link>
        <Link
          className='flex items-center py-2 px-4 rounded-md bg-accent-dark text-center  text-text-light'
          to={`${props.siteLink}`}
          target='_blank'
        >
          <Browser className='mr-2' size={18} />
          Live
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
