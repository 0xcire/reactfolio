import { Link } from 'react-router-dom';
import { m, useMotionTemplate, useMotionValue } from 'framer-motion';

import HideOverflow from '@/components/Layout/HideOverflow';
import LinkBtn from '@/components/LinkBtn';

import { projectlink, springReveal } from '@/data/data';

type CardProps = {
  image: string;
  title: string;
  stack: Array<JSX.Element>;
  description: string;
  links: projectlink;
};

function ProjectCard({ image, title, stack, description, links }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (
    currentTarget: HTMLDivElement,
    clientX: number,
    clientY: number
  ) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <HideOverflow className='pt-6'>
      <m.div
        className='group relative mb-12 flex flex-col justify-between overflow-hidden rounded-md bg-[#0d1520]/[0.35] p-4 shadow-lg lg:my-0'
        variants={springReveal}
        onMouseMove={(e) =>
          handleMouseMove(e.currentTarget, e.clientX, e.clientY)
        }
      >
        <m.div
          className='pointer-events-none absolute -inset-px z-[-10] rounded-xl opacity-0 transition duration-200 group-hover:opacity-100'
          style={{
            background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(30, 46, 76, 0.8),
              transparent 80%
            )
          `,
          }}
        />
        <img
          className='h-full w-auto rounded-md xl:my-auto'
          src={image}
          alt={`${title}-img`}
          loading='lazy'
        />

        <div className='card-body'>
          <div className='card-text mt-4 xl:pt-0'>
            <h3 className='text-xl font-bold'>{title}</h3>

            <p className='stack my-4 flex items-center justify-between text-lg'>
              {stack}
            </p>
            <p className='mb-1'>{description}</p>
            <Link
              className='text-cyan-100'
              to={`${links.code.url}/blob/main/README.md`}
              target='_blank'
              rel='noreferrer'
            >
              Read more
            </Link>
          </div>
          <div className='buttons mt-4 flex justify-between'>
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
