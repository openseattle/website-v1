import Image from 'next/image';

export default function Header() {
  return (
    <header className='grid w-full grid-cols-3 items-center py-8 px-8'>
      <Image
        src='/openseattle-500x392.png'
        alt='Open Seattle Logo'
        width={80}
        height={80}
      />
      <div className='hidden justify-self-center text-center md:block'>
        <h1 className='whitespace-nowrap text-6xl font-bold leading-snug text-orange-600 dark:text-orange-400'>
          Open Seattle
        </h1>
        <h2 className='text-lg'>Technical folks using our powers for good</h2>
      </div>
    </header>
  );
}
