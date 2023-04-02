import { FC, PropsWithChildren, ReactNode } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import { pageTransition } from '@/data/data';

type TContainer = PropsWithChildren<{
  children: ReactNode;
  className?: string;
}>;

const TransitionContainer: FC<TContainer> = ({ children, className }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={twMerge(
          'grid min-h-[calc(100svh-(theme(height.header)+theme(height.footer)))] place-items-center bg-primary-dark text-text-dark',
          className
        )}
        variants={pageTransition}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default TransitionContainer;
