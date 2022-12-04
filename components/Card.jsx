export default function Card({ children }) {
  return (
    <div className='flex flex-col rounded-md bg-slate-300 p-4 shadow-md dark:bg-white dark:bg-opacity-10'>
      {children}
    </div>
  );
}
