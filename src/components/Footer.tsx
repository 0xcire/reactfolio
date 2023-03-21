import { useLocation } from 'react-router-dom';

function Footer() {
  const path = useLocation().pathname;

  return (
    <footer
      className={`h-footer grid place-items-center text-text-dark text-center text-[11px] xl:text-[13px] 
              ${path === '/' ? 'bg-transparent' : 'bg-primary-dark'}`}
    >
      <div>&copy; 2023 EC</div>
    </footer>
  );
}

export default Footer;
