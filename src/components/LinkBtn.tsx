import { FC, PropsWithChildren, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { m, Variants } from 'framer-motion';

// look at clsx, tailwind merge to replace below 'className' prop
// or at least, be cognizent for next project

type LinkBtnProps = PropsWithChildren<{
  url: string;
  icon?: JSX.Element;
  className: string;
  children?: ReactNode;
  target?: string;
  variants: Variants;
}>;

const LinkBtn: FC<LinkBtnProps> = ({
  url,
  icon,
  className,
  children,
  variants,
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
      className={
        `w-fit px-5 py-2 text-text-light bg-accent-dark rounded-md` +
        ` ${className}`
      }
      onClick={() => handleNavigate(url)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      variants={variants}
    >
      {icon ? icon : null}
      {children}
    </m.button>
  );
};

export default LinkBtn;
