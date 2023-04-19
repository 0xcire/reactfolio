import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

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
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0,
  });
  const cardRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef?.current;
    const rect = card?.getBoundingClientRect();

    if (!rect) return;

    const handleGradientShift = (e: MouseEvent) => {
      setmousePosition({
        x: e.clientX - rect?.left,
        y: e.clientY - rect?.top,
      });
    };

    const hideGradient = () => {
      gradientRef.current?.classList.add('hidden');
    };

    const showGradient = () => {
      gradientRef.current?.classList.remove('hidden');
    };

    card?.addEventListener('mouseenter', showGradient);
    card?.addEventListener('mousemove', handleGradientShift);
    card?.addEventListener('mouseleave', hideGradient);

    return () => {
      card?.removeEventListener('mouseenter', showGradient);
      card?.removeEventListener('mousemove', handleGradientShift);
      card?.removeEventListener('mouseleave', hideGradient);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <HideOverflow className='pt-6'>
      <m.div
        className='relative mb-12 flex flex-col justify-between overflow-hidden rounded-md bg-[#0d1520]/[0.35] p-4 shadow-lg lg:my-0'
        variants={springReveal}
        ref={cardRef}
      >
        <m.div
          className='absolute -top-1/2 -left-1/2 z-[-10] hidden h-full w-full  rounded-full border-2 bg-[#18253a] blur-3xl'
          ref={gradientRef}
          transition={{ type: 'linear', duration: 0 }}
          variants={variants}
          animate='default'
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
