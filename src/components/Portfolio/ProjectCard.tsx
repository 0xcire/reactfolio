import { m } from 'framer-motion';
import LinkBtn from '../LinkBtn';
import { projectlink } from '../../data/data';
import { content } from '../../data/data';

type CardProps = {
  image: string;
  title: string;
  stack: string;
  description: string;
  links: projectlink;
};

function ProjectCard({ image, title, stack, description, links }: CardProps) {
  return (
    <m.div
      className='flex flex-col justify-between rounded-md shadow-md shadow-[#121d2c] my-12 lg:my-0'
      variants={content}
    >
      <div className=''>
        <img
          className='rounded-md w-full h-auto xl:h-full xl:w-auto xl:my-auto'
          src={image}
          alt={`${title}-img`}
          loading='lazy'
        />
      </div>

      <div className='card-body'>
        <div className='card-text  mt-4 py-4 xl:pt-0 px-12'>
          <h3 className='font-bold text-xl'>{title}</h3>

          <p className='stack my-2 text-[13px]'>{stack}</p>
          <p>{description}</p>
        </div>
        <div className='buttons flex justify-between my-4 px-12'>
          {Object.keys(links).map((link, index) => (
            <LinkBtn
              key={index}
              url={links[link as keyof projectlink].url ?? ''}
              target='_blank'
              className='flex items-center'
              variants={{}}
            >
              {links[link as keyof projectlink].icon}
              <p className='ml-2'>{link}</p>
            </LinkBtn>
          ))}
        </div>
      </div>
    </m.div>
  );
}

export default ProjectCard;
