import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { links } from '../../data/data';

type TNav = {
  isMobile: boolean;
  toggleMenu?: () => void;
};

function NavLinks({ isMobile, toggleMenu }: TNav) {
  const navClassName = isMobile ? 'flex flex-col text-right mb-12' : 'flex';
  const linkClassName = isMobile ? 'my-2 py-4 px-6 pr-0' : 'ml-12 px-0 py-2';
  const githubLinkClassName = isMobile ? 'p-6' : 'mr-6';
  const linkedinLinkClassName = isMobile ? 'p-6 pr-0' : '';

  return (
    <>
      <div className='flex items-center justify-end'>
        <Link
          className={githubLinkClassName}
          to={`https://github.com/0xcire`}
          target='_blank'
        >
          <GithubLogo size={26} />
        </Link>
        <Link
          className={linkedinLinkClassName}
          to={`https://www.linkedin.com/in/ericchi1/`}
          target='_blank'
        >
          <LinkedinLogo size={26} />
        </Link>
      </div>
      <nav className={navClassName}>
        {links.map((link, index) => (
          <Link
            className={linkClassName}
            key={index}
            to={`/${link}`}
            data-testid={!isMobile ? link : undefined}
            onClick={isMobile ? toggleMenu : undefined}
          >
            {link}
          </Link>
        ))}
      </nav>
    </>
  );
}

export default NavLinks;
