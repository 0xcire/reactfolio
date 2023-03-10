import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StarryNight from '../components/StarryNight';

function Home() {
  return (
    <div className='h-screen flex flex-col relative overflow-hidden'>
      <Header />
      <div className='h-full grid place-items-center px-6 bg-transparent text-text-dark overflow-hidden'>
        <div className='w-full mb-[75px] flex flex-col sm:text-center'>
          <h1 className='text-4xl font-bold'>{"Hi, I'm Eric 🚀"}</h1>
          <p className='mt-2'>I am a Full-Stack Developer.</p>
          <Link
            className='rounded-md p-3 block mt-6 w-5/12 max-w-[300px] h-full text-center text-text-light bg-accent-dark sm:mx-auto'
            to={`/Portfolio`}
          >
            View my work
          </Link>
        </div>
      </div>
      <StarryNight />
      <Footer links={false} />
    </div>
  );
}

export default Home;
