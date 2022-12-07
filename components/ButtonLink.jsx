export default function ButtonLink({ children, href }) {
  return (
    <a
      href={href || '#'}
      className='rounded-md bg-green-700 p-2 text-sm font-bold uppercase text-white ring-white transition-colors hover:ring-1 active:bg-green-800'
    >
      {children}
    </a>
  );
}
