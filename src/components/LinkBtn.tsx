import { FC, PropsWithChildren, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { m, Variants } from 'framer-motion';
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
        'w-fit px-5 py-2 text-text-light bg-accent-dark rounded-md',
        className
      )}
      onClick={() => handleNavigate(url)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      variants={variants as Variants}
      data-testid={dataTestID}
    >
      {icon ? icon : null}
      {children}
    </m.button>
  );
};

export default LinkBtn;
