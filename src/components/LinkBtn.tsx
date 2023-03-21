import { FC, PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type LinkBtnProps = PropsWithChildren<{
  url: string;
  icon?: JSX.Element;
  className: string;
  children?: ReactNode;
  target?: string;
}>;

const LinkBtn: FC<LinkBtnProps> = ({
  url,
  icon,
  className,
  target,
  children,
}) => (
  <Link
    to={url}
    className={
      `w-fit px-5 py-2 text-text-light bg-accent-dark rounded-md` +
      ` ${className}`
    }
    target={target ? 'target' : ''}
  >
    {icon ? icon : null}
    {children}
  </Link>
);

export default LinkBtn;
