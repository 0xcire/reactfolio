// import { Link, useLocation } from 'react-router-dom';

// const links: string[] = ['Home', 'Portfolio', 'About', 'Contact'];

function Footer() {
  // const path = useLocation().pathname;

  return (
    <footer className='py-6 lg:py-8 text-text-dark bg-primary-dark text-center text-[11px]'>
      <>
        {/* {path !== '/' ? (
          <nav className='mb-2'>
            {links.map((link, index) => {
              link = link === 'Home' ? '' : link;
              return (
                <Link className='px-4 text-[14px]' key={index} to={`/${link}`}>
                  {(link = link === '' ? 'Home' : link)}
                </Link>
              );
            })}
          </nav>
        ) : null} */}

        <div>&copy; 2023 EC</div>
      </>
    </footer>
  );
}

export default Footer;
