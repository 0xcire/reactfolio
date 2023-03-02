import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='navbar w-6/12 mr-auto ml-auto border-2 border-blue-500 rounded-2xl'>
      <Link to={`/`}>Home</Link>
    </div>
  );
}

export default Header;
