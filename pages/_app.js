import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <Component {...pageProps} />
        <footer className='flex flex-col items-center border-t border-solid border-t-slate-600 py-2'>
          <Image
            src='/openseattle-500x392.png'
            alt='Open Seattle Logo'
            width={80}
            height={80}
          />
        </footer>
      </div>
    </>
  );
}

export default MyApp;
