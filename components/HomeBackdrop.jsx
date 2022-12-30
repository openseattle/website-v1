import Image from 'next/image';
import { Box, Typography } from '@mui/material';
export default function HomeBackdrop({ imageComponent, headerText }) {
  return (
    <>
      <Box
        sx={{
          height: '100vmin',
          width: '100%',
          position: 'absolute',
          zIndex: '-2',
        }}
      >
        {imageComponent}
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
          height: '100vmin',
          width: '100%',
          position: 'absolute',
          zIndex: '-1',
          background:
            'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 50%, rgba(255,255,255,.2) 100%)',
          backdropFilter: 'blur(6px)',
        }}
      />
    </>
  );
}
