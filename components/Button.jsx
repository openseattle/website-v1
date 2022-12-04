export default function Button({ children }) {
  return (
    <button className='rounded-md bg-slate-700 p-2 text-sm font-bold uppercase'>
      {children}
    </button>
  );
}
