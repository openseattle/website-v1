import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='h-full bg-gray-200 dark:bg-slate-900 dark:text-white'>
      <Head />
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
