import { m } from 'framer-motion';

import HideOverflow from '@/components/Layout/HideOverflow';
import LinkBtn from '@/components/LinkBtn';

import { projectlink, springReveal } from '@/data/data';

type CardProps = {
  image: string;
  title: string;
  stack: string;
  description: string;
  links: projectlink;
};

function ProjectCard({ image, title, stack, description, links }: CardProps) {
  return (
    <HideOverflow className='pt-6'>
      <m.div
        className='mb-12 flex flex-col justify-between rounded-md shadow-md shadow-[#121d2c] lg:my-0'
        variants={springReveal}
      >
        <div className=''>
          <img
            className='h-auto w-full rounded-md xl:my-auto xl:h-full xl:w-auto'
            src={image}
            alt={`${title}-img`}
            loading='lazy'
          />
        </div>

        <div className='card-body'>
          <div className='card-text  mt-4 py-4 px-12 xl:pt-0'>
            <h3 className='text-xl font-bold'>{title}</h3>

            <p className='stack my-2 text-[13px]'>{stack}</p>
            <p>{description}</p>
          </div>
          <div className='buttons my-4 flex justify-between px-12'>
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
    </HideOverflow>
  );
}

export default ProjectCard;
