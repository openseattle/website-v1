import Image from 'next/image';
import { Box } from '@mui/material';
export default function HomeBackdrop({ children }) {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          position: 'absolute',
          zIndex: '-2',
        }}
      >
        {children}
        {/* <Image
          priority='true'
          src='/seattle-backdrop.jpg'
          alt=''
          fill
          style={{ objectFit: 'cover', backdropFilter: 'blur(10px)' }}
        /> */}
      </Box>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          position: 'absolute',
          zIndex: '-1',
          background:
            'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,.4) 50%, rgba(255,255,255,.4) 100%)',
          backdropFilter: 'blur(6px)',
        }}
      />
    </>
  );
}
