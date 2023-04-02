import { FC, PropsWithChildren, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Variants, m } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type LinkBtnProps = PropsWithChildren<{
  url: string;
  icon?: JSX.Element;
  className: string;
  children?: ReactNode;
  target?: string;
  variants?: Variants;
  dataTestID?: string;
}>;

const LinkBtn: FC<LinkBtnProps> = ({
  url,
  icon,
  className,
  children,
  variants,
  dataTestID,
}) => {
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    if (url[0] === '/') {
      navigate(url);
    } else {
      window.open(url, 'noreferrer');
    }
  };

  return (
    <m.button
      className={twMerge(
        'w-fit rounded-md bg-accent-dark px-5 py-2 text-text-light',
        className
      )}
      onClick={() => handleNavigate(url)}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      variants={variants as Variants}
      data-testid={dataTestID}
    >
      {icon ? icon : null}
      {children}
    </m.button>
  );
};

export default LinkBtn;
