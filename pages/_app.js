import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Image from 'next/image';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='flex min-h-screen flex-col items-center'>
        <Header />
        <Component {...pageProps} />
        <footer className='flex w-full flex-col items-center border-t border-solid border-t-slate-600 py-2'>
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
