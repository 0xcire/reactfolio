import { FC, PropsWithChildren, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type THideOverflow = PropsWithChildren<{
  children: ReactNode;
  className?: string;
}>;

const HideOverflow: FC<THideOverflow> = ({ children, className }) => {
  return (
    <div className={twMerge('overflow-hidden', className)}>{children}</div>
  );
};

export default HideOverflow;
