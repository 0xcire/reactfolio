import { Link } from 'react-router-dom';

const links: string[] = ['Home', 'Portfolio', 'About', 'Contact'];

type FooterProps = {
  links: boolean;
};

function Footer(props: FooterProps) {
  return (
    <footer className='text-text-dark text-center py-6 lg:py-12 shadow-md text-[11px]'>
      <>
        {props.links && (
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
        )}

        <div>&copy; EC 2023</div>
      </>
    </footer>
  );
}

export default Footer;
