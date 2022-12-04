export default function ButtonLink({ children, href }) {
  return (
    <a
      href={href || '#'}
      className='rounded-md bg-green-600 p-2 text-sm font-bold uppercase text-white transition-colors hover:bg-green-700 active:bg-green-800'
    >
      {children}
    </a>
  );
}
