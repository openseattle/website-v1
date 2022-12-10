import Image from 'next/image';
import { Box } from '@mui/material';
export default function HomeBackdrop() {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          position: 'absolute',
          zIndex: '-2',
          backgroundImage: `url(/seattle-backdrop-blur3.webp)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          position: 'absolute',
          zIndex: '-1',
          background:
            'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,.4) 50%, rgba(255,255,255,.4) 100%)',
          backgroundRepeat: 'no-repeat',
          // backdropFilter: 'blur(6px)',
        }}
      />
    </>
  );
}
