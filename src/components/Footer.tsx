import { useLocation } from 'react-router-dom';

function Footer() {
  const path = useLocation().pathname;

  return (
    <footer
      className={`grid h-footer place-items-center text-center text-[11px] text-text-dark xl:text-[13px] 
              ${path === '/' ? 'bg-transparent' : 'bg-primary-dark'}`}
    >
      <div>&copy; 2023 EC</div>
    </footer>
  );
}

export default Footer;
